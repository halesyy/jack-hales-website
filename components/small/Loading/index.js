
import { useEffect, useRef } from "react"
import classnames from "classnames"

export function LoadFail(props) {
   let message = props.message? "Reason: " + props.message: ""
   return (
      <div>
         Failed to load. {message}.
      </div>
   )
}

export function Loading(props) {
   let span = props.span || false
   let message = props.message || "Loading..."
   // Return span or div.
   if (span) return (<span>{message}</span>)
   else return (<div>{message}</div>)
}

let ErrorIframe = (props) => {
   let iframeRef = useRef()

   // Insert the injected HTML into the iFrame.
   useEffect(() => {
      iframeRef.current.srcdoc = `
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;800&family=Pacifico&family=Oswald&family=Roboto&family=Open+Sans&family=Ubuntu&display=swap');
            
            body { text-align: center; font-family: Ubuntu; }
            
            h1 { color: #ff5252; }
         </style>
         ${props.html}
      `
   }, [props.html])
   
   // Render iFrame.
   return (
      <div className={classnames(props.className)}>
         <iframe
            ref={iframeRef}
            title="Error Content"
            sandbox="allow-same-origin"
            style={{ width: '100%', height: '100%' }}
         ></iframe>
      </div>
   )
}

export function Error({message, html, className}) {
   message = message || "An error occurred, please try again."
   html = html || false

   if (html) {
      return (
         <div>
            <ErrorIframe className={className} html={html} />
         </div>
      )
   }

   return (<div>{message}</div>)
}