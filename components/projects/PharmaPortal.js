import classnames from "classnames"
import Title from "components/small/Title"

let PharmaPortalProject = (props) => {
   return (
      <div className="modal-content"> 
         {/* <Title className="mt-4">Pharma Portal</Title> */}
         <p>
            Pharma Portal (PP) is an end-to-end web app focussed on solving problems
            in the Australian Pharmaceutical space for pharmacies, suppliers, groups,
            wholesalers and more.
         </p>
         <p>
            PP started development in late 2022, and key elements have roots in late 2021.
            This has been one of the key projects in my career thus far, pushing me to
            take control of the whole stack and build an end-to-end application.
         </p>
         <p>
            PP encapsulates:
            <ul className="ml-10 mt-4 list-disc">
               <li>Extraction from the several POS/Dispense systems</li>
               <li>Application level engineering</li>
               <li>Remote software updating</li>
               <li>Data storage and updating</li>
               <li>Outreach, registration, onboarding and installation</li>
               <li>Various exception handling systems</li>
               <li>Very unique reporting architecture, allowing rapid report development and distribution</li>
               <li>Store, group, and suppliers all using the same reports</li>
               <li>Configurable alert system</li>
               <li>Two-way data interaction (user can modify underlying data)</li>
               <li>Entity relationships and interactions</li>
               <li>Much more...</li>
            </ul>
         </p>
         <p>
            By being end-to-end on this project, it has taught me about all of the varying 
            roles and bodies involved in building an application:
            <ul className="ml-10 mt-4 list-disc">
               <li>Onboarding</li>
               <li>Support</li>
               <li>Application Development</li>
               <li>UI Development and Enhancement</li>
               <li>Interpreting Feedback</li>
               <li>Pivoting</li>
            </ul>
         </p>
         <p>
            It's the last point - pivoting - which I believe the strongest in. I feel as if 
            it's important to iterate, because once you can "feel" where the application is, 
            things pop up, and ideas flow. With fellow business-people, being able to see and 
            discuss a concept is incredibly valuable.
         </p>
      </div>
   )
}

export default PharmaPortalProject