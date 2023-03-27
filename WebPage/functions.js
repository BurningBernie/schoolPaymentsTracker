function selector(){
   let selectorInput = document.getElementById("SL")

   selectorInput.options[0]= new Option ('Select a School to begin')
   selectorInput.options[1]= new Option ('School Example 01')
   selectorInput.options[2]= new Option ('School Example 02')
   selectorInput.options[3]= new Option ('School Example 03')
}

selector()