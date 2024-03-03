import { Link } from "@nextui-org/react";

export default function RAI_Levo({ ...props }) {
   return (
      <div className="modal-content">
         My work with <Link className="text-2xl" href="https://www.levo.com.au/" target="_levo">Levo</Link>, and a 
         project with the <Link className="text-2xl" href="https://www.regionalaustralia.org.au/" target="_rai">Regional Australia Institute</Link>.
      </div>
   );
}