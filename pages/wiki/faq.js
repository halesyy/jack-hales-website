import Block from "components/small/Block"
import { AButton } from "components/small/Button"
import Title from "components/small/Title"
import { SmallContainer } from "components/medium/Container"


let classFix = <span className="md:scale-125 md:!my-32 md:w-3/5"></span>

let FAQ = (props) => {
   return (
      <SmallContainer>
         <Title>Frequently Asked Questions</Title>
         <Block>
            <div className="mb-5">
               Learn more about...
            </div>
            <div className="grid grid-cols-1 gap-5 text-center">
               <AButton href="/wiki/articles/pharma-portal-extract" className="p-5" lined>
                  What Our Extract Does
               </AButton>
               <AButton href="/wiki/articles/onboarding-get-started" className="p-5" lined>
                  Onboarding - How to Get Started
               </AButton>
               <AButton href="/wiki/articles/data-privacy" className="p-5" lined>
                  Data Privacy - De-identification, Sharing, and Security
               </AButton>
               <AButton href="/wiki/articles/pharma-portal-reports" className="p-5" lined>
                  Pharma Portal Reports
               </AButton>
            </div>
         </Block>
      </SmallContainer>
   )
}

export default FAQ