import { useState } from 'react'

const elements = [
  {
    title: 'Treasury/Collection',
    description: [
      'Follows complete treasury operation guidelines for collection',
      'Complete Cycle - collection, remittance, liquidation, deposit',
      'Multi-fund support',
      'Multi-role and multi-org support',
      'Manage inventory of accountable forms',
      'Integrated collection for all types of transactions',
      'Support for sub collectors (unbonded collectors)',
      'Support field, batch capture and remote collections',
      'Monitor transactions affected by bouncing checks',
      'E-payment support including issuance of EOR (electronic official receipt)',
      'Management, reconciliation and reporting of e-payment transactions',
      'Support Order of Payment Support for electronic and over the counter payment',
      'Support payment types like checks, split checks and deposited payments',
      'Rule based definition for revenue sharing',
      'Record other sources of income like IRA',
      'Generate SRE automatically (revenues)',
      'Generate income by fund and other reports',
      'Link to accounting (JEV preparation )',
    ]
  },

  {
    title: 'Real Property Assessment',
    description: [
      'Assessment of land, building, machineries, plants/trees and miscellaneous properties',
      'Rule-base computation of property assessment',
      'Workflow transaction support',
      'Electronic signature integration to online transaction using Wacom siganture device',
      'Digitization of support documents',
      'Supports transfer of ownership, subdivision, consolidation',
      'Multiple claim, annotations, restrictions and more',
      'Online issuance of certifications',
      'Seamless integration with Land Tax',
    ],
  },

  {
    title: 'Business Permit & Licensing',
    description: [
      'Online new business application and renewal thru Filipizen website to comply with RA 11032 (Ease of Doing Business and Efficient Delivery of Government Services)',
      'Support for multiple line of business',
      'Allow real time electronic payment',
      'Automated assessment configured by rule based system',
      'Support for other transactions like radd and retire line of business',
      'Customizable workflow support',
      'Rule based assessment - no manual inter vention',
      'Dynamic info and definable requirements',
      'Integrated with treasury collection',
      'Allow recording of findings that blocks renewal if unresolved',
      'Special support for lessor type of business',
      'Customizable business permits',
      'Various reports - e.g. list of businesses and reports required by national office like DTI',
    ]
  },

  {
    title: 'Land Tax',
    description: [
      'Seamless integration with the assessor',
      'Seamless integration with collection module',
      'Real time payment thru electronic payment',
      'Rule-base billing computation',
      'Single and Batch billing',
      'Automatic posting of collection to ledger',
      'Automatic sharing of collection',
      'Support for property payer',
      'Support for tax difference',
      'Support for restrictions/unrestrictions of property',
      'Support for Compromise Agreement',
      'Support for Tax Incentive',
      'Online issuance of tax clearance',
      'General Revision',
    ]
  }
];

const ProductsItems = () => {
  const [selectedElement, setSelectedElement] = useState(elements[0]);

  type Element = {
    title: string;
    description: string[];
  };
  
  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  return (
    <div className="
      w-full flex gap-10 
      xxs:justify-center xxs:flex-col xxs:gap-0 
      xs:justify-center xs:flex-col xs:gap-0 
      sm:justify-center sm:flex-col sm:px-0 
      md:justify-center md:flex-col md:px-0"
    >
      <ul className='xxs:columns-2 xxs:place-items-center xs:columns-2 xs:place-items-center sm:columns-2 sm:place-items-center md:columns-2 md:place-items-center'>
        {elements.map((element, index) => (
          <li className="flex flex-col py-1 gap-5" key={index}>
            <div
              className={`select-none text-base text-start font-bold cursor-pointer
              xxs:text-[7px] xxs:text-center xs:text-[7px] xs:text-center sm:text-base sm:text-center md:text-base md:text-center
              ${selectedElement === element ? 'bg-slate-800 text-white rounded-md' : ''}`}
              onClick={() => handleElementClick(element)}
            >
              <p className="hover:bg-slate-800 hover:text-white px-5 py-1 xxs:p-0 rounded-md self-center w-[260px] 2xl:w-[320px] xxs:w-full xs:w-full sm:w-full md:w-full duration-300">
                {element.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
      
      <ul className='w-full h-full columns-2 xxs:gap-4 xs:gap-4 sm:gap-4 md:gap-4 gap-10 list-disc'>
        {selectedElement && selectedElement.description && selectedElement.description.map((description, index) => (
          <li key={index} className='text-xl tracking-tight text-start xxs:text-xs xs:text-xs sm:text-base md:text-xl lg:text-base' >{description}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsItems