import { Link } from "@nextui-org/react";

export default function RedwoodTrade({ ...props }) {
   return (
      <div className="modal-content">
         <p>
            At <Link className="text-2xl" href="https://redwood.trade" target="_redwoodTrade">Redwood Trade</Link> I manage a logistics data staging pipeline to 
            ensure data is monitored and passes expected constraints to quickly resolve errors. 
         </p>
         <p>
            Through this experience I've worked with CHR, Logwin, DPW and Rohlig files, as well as written processes to 
            create new data sources for better reference on ETA and trans-shipment fields.
         </p>
      </div>
   );
}