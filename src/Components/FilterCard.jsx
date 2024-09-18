import React from 'react'

const FilterCard = () => {
  const filterData=[
    {
      filterType:"Location",
      array:["Delhi Ncr","Mumbai","Pune","Banglore",
        "Ahmedabad"
      ]
    },
    {
      filterType:"Industry",
      array:["Software & consultancy","Hr","Developers","Finance",
        "Sales"
      ]
    },
    {
      filterType:"Work mode",
      array:["Hybrid","Work from home","On site",
      ]
    },
    {
      filterType:"Salary",
      array:["0-3 lakhs","3-6 lakhs","7-10 lakhs","10-15 lakhs",
      
      ]
    },
    {
      filterType:"Top companies",
      array:["Wipro","Infosys","Microsoft","Amazon",
        "Flipkart"
      ]
    }

  ]
  return (
    <div>FilterCard
      {
        filterData
      }
    </div>
  )
}

export default FilterCard