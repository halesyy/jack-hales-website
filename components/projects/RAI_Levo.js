import { Link } from "@nextui-org/react";

export default function RAI_Levo({ ...props }) {
   return (
      <div className="modal-content">
         <p>
            My work with <Link className="text-2xl" href="https://www.levo.com.au/" target="_levo">Levo</Link> involved 
            blending data strategy with creative design.
         </p>
         <p>
            My work with the <Link className="text-2xl" href="https://www.regionalaustralia.org.au/" target="_rai">Regional Australia Institute</Link> included 
            developing datasets to power the <Link className="text-2xl" href="https://movetomore.com.au/" target="_moveToMore">Move To More</Link> public initiative project.
         </p>
      </div>
   );
}