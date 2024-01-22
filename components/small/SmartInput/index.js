
import { useRef, useState, useEffect } from "react"
import classnames from "classnames"
import Button from "components/small/Button"

import { usePlacesWidget } from "react-google-autocomplete"

import SignatureCanvas from "react-signature-canvas"

// Firebase/uploading.
// import { storage } from "lib/firebase-init"
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"


let SmartInput = ({ autocomplete, ...props}) => {

    // Pull out all the beautiful props.
    let inputRef = useRef()
    let form = props.form
    let setForm = props.setForm // to trigger a remote update
    let name = props.name
    let type = props.type || "text"
    let label = props.label
    let placeholder = props.placeholder || ""

    let groupName = props.group || false
    let groupNumber = props.groupNumber

    let className = props.className || false

    // A custom, out-of-state assigned value.
    let [customValue, setCustomValue] = useState(false)

    // Value of the input at start.
    let [value, setValue] = useState("")

    // For file/image uploading.
    let [file, setFile] = useState(false)

    // Set the local value to the remote value when it changes.
    useEffect(() => {
        let remoteValue
        if (groupName) {
            try {
                // console.log(form)
                remoteValue = form[groupName][groupNumber][name]
                // console.log(groupName, groupNumber, name, remoteValue)
            } catch {
                console.log("Failed to retrieve remote group value")
                return false
            }
        } else {
            remoteValue = form[name] || ""
        }

        setValue(remoteValue)
    }, [form])

    // Called from the `onChange` of the input.
    // A generic "handling change" function which can be used by all elements for
    // the given name.
    let handleChange = (value) => {

        setValue(value)
        let newForm = { ...form }

        if (groupName) {
            // Getting value if the input element is from a group.

            if (!(groupName in newForm)) {
                newForm[groupName] = []
            }

            // Managing state changes. If groupNumber === length, need to
            // add a new object to reference.
            if (groupNumber === newForm[groupName].length) {
                newForm[groupName].push({})
            }

            // Set value.
            if ((newForm[groupName].length - 1) >= groupNumber) {
                if (value === false) {
                    console.log("Not changing group value since value is bool false")
                    return false
                }
                newForm[groupName][groupNumber][name] = value
            } else {
                console.log("Did not change form from group since values made no sense")
                return false
            }
        } else {
            // Getting the regular value.
            newForm[name] = value
        }

        setForm(newForm)
    }

    // When the value changes locally.
    // useEffect(() => console.log("Value set to", value), [value])

    // Assign a change out-of-scope. Using change will cause a chain reaction to save it.
    useEffect(() => customValue !== false ? handleChange(customValue) : false, [customValue])

    // Decide on the type of input element to put in its place.
    let inputObject = false

    if (type === "text" || type === "number" || type === "date" || type === "email" || type === "date") {
        inputObject = (
            <input
                type={type}
                ref={inputRef}
                value={value}
                name={name}
                autocomplete={autocomplete}
                onChange={() => handleChange(inputRef.current.value)}
                className={classnames("smart-input")}
                placeholder={placeholder}
                required={props.required || undefined}
            />
        )
    }

    if (type === "checkbox") {
        let labelCopy = props.label
        inputObject = (
            <>
                <div className="flex items-center">
                    <input
                        type={type}
                        ref={inputRef}
                        value={value}
                        checked={value? true: false}
                        onChange={() => handleChange(inputRef.current.checked)}
                        placeholder={placeholder}
                        required={props.required || undefined}
                        id={name}
                    />
                    <label for={name} className="ml-4">{labelCopy}</label>
                </div>
            </>

        )
        label = false
    }

    if (type === "textarea") {
        inputObject = (
            <textarea placeholder={placeholder} className={classnames("smart-input", className)} ref={inputRef} value={value} onChange={() => handleChange(inputRef.current.value)}></textarea>
        )
    }

    if (type === "address") {
        let { ref, autocompleteRef } = usePlacesWidget({
            apiKey: "AIzaSyA0XlPJTBm2QXEOAeYfdqdWWs9x7RqTYoE",
            options: {
                types: "addresses",
                componentRestrictions: { country: ["au"] }
            },
            onPlaceSelected: (place) => {
                setCustomValue(place.formatted_address)
                setValue(place.formatted_address)
            }
        })
        inputObject = (
            <input
                type={type}
                ref={ref}
                name={name}
                autocomplete={autocomplete}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                className={classnames("smart-input")}
                placeholder={props.placeholder || ""}
            />
        )
    }

    if (type === "select") {
        inputObject = (
            <select className={classnames("smart-input")} ref={inputRef} value={value} onChange={() => handleChange(inputRef.current.value)} required={props.required || undefined}>
                <option value="">--</option>
                {props.options.map(([place, val], i) => (
                    <option value={val} key={i}>{place}</option>
                ))}
            </select>
        )
    }

    // Upload a file to Firebase storage.
    if (type === "image") {
        inputObject = (
            <>
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <Button onClick={(e) => {
                    if (!file) {
                        alert("No file selected!")
                        return false
                    }
                    // 1. upload file to the bucket (public)
                    let timeStamp = (+new Date()).toString()
                    let fileName = `${timeStamp}_${file.name}`
                    let storageRef = ref(storage, `/whitepaper-images/${fileName}`)

                    // Upload the file, and storage the URL as the file part.
                    uploadBytes(storageRef, file).then((snapshot) => {
                        // alert("Finished uploading file.")
                        getDownloadURL(storageRef).then((url) => {
                            setForm((form) => {
                                let newForm = { ...form }
                                newForm[name] = url
                                return newForm
                            })
                        })
                    })

                    // 2. save to form as ref to proj so its ez to img src
                    let publicImageUrl = ``
                }}>Upload Image</Button>
            </>
        )
    }

    if (type === "signature") {
        let renderSignature = Object.keys(form).includes(name)

        inputObject = (
            <>
                {renderSignature ? (
                    <>
                        <img src={form[name]} alt="Your signature" className="border" />
                        <Button className="mt-2" onClick={() => {
                            setForm(form => {
                                let newForm = { ...form }
                                delete newForm[name]
                                return newForm
                            })
                        }}>Redo</Button>
                    </>
                ) : (
                    <>
                        <SignatureCanvas
                            penColor="#f09"
                            ref={inputRef}
                            canvasProps={{ width: 300, height: 150, className: classnames("border", className) }}
                        />
                        <div className="mt-2">
                            <Button className="mr-2" onClick={() => {
                                let sigData = inputRef.current.toDataURL()
                                if (sigData.length < 2000) {
                                    alert("Please try re-doing your signature, it does not have enough body.")
                                    inputRef.current.clear()
                                } else {
                                    handleChange(sigData)
                                }
                            }}>Save</Button>
                            <Button className="bg-gray-300" onClick={() => inputRef.current.clear()}>Clear</Button>
                        </div>
                    </>
                )}
                {(props.note !== false) ? (
                    <div className="mt-2 text-gray-400">
                        Note: once you submit your signature, you can only overwrite it.
                    </div>
                ) : false}
            </>
        )

        // signatureCapture.current.toDataURL()
        // signatureCapture.current.clear()
    }

    // This is to be attached with the signature only.
    // useEffect(() => {

    // }, [])


    return (
        <div className={classnames(props.className)}>
            {label ? (
                <div className="smart-input-label">{label}{props.required ? "*" : false}</div>
            ) : false}
            {inputObject}
        </div>
    )

}

export default SmartInput