let button = document.getElementById('btn');

button.addEventListener('click', function()
{
    const value = parseInt(document.getElementById('value').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    if(value == null || isNaN(value))
    {
        document.getElementById('error').innerHTML = 'Please provide only numeric value.';
        document.getElementById('value').focus();
    }
    else
    {
        document.getElementById('error').innerHTML = '';
        const value = parseInt(document.getElementById('value').value);
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;  
        var x=document.getElementById("from");
        var i=x.selectedIndex;
        var y=x.options[i].text;
        if(y=="Pounds")
        {
            switch(to)
            {
                case 'Pounds':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1.0.toFixed(3);
                                break;
                case 'Kilograms': 
                                    document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.4534.toFixed(3);
                                    break;
                case 'Ounces':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*16.0.toFixed(3);   
                                break;
                case 'Stones':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.07142.toFixed(3);
                                break;
                case 'Grams':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*453.6.toFixed(3); 
                                break;
                default:
                            alert('Error');
            }
        }
        else
        if(y=="Kilograms")
        {
            switch(to)
            {
                case 'Pounds':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*2.2046.toFixed(3);
                                break;
                case 'Kilograms': 
                                    document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1.0.toFixed(3);
                                    break;
                case 'Ounces':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*35.274.toFixed(3);   
                                break;
                case 'Stones':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.1575.toFixed(3);
                                break;
                case 'Grams':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1000.0.toFixed(3); 
                                break;
                default:
                            alert('Error');
            }
        }
        else
        if(y=="Grams")
        {
            switch(to)
            {
                case 'Pounds':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.0022.toFixed(3);
                                break;
                case 'Kilograms': 
                                    document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.001.toFixed(3);
                                    break;
                case 'Ounces':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.035274.toFixed(3);   
                                break;
                case 'Stones':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.0000157.toFixed(3);
                                break;
                case 'Grams':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1.0.toFixed(3); 
                                break;
                default:
                            alert('Error');
            }
        }
        else
        if(y=="Ounces")
        {
            switch(to)
            {
                case 'Pounds':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.0625.toFixed(3);
                                break;
                case 'Kilograms': 
                                    document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.0283495.toFixed(3);
                                    break;
                case 'Ounces':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1.0.toFixed(3);   
                                break;
                case 'Stones':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*0.00446429.toFixed(3);
                                break;
                case 'Grams':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*28.3495.toFixed(3); 
                                break;
                default:
                            alert('Error');
            }
        }
        else
        if(y=="Stones")
        {
            switch(to)
            {
                case 'Pounds':
                               document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*14.0.toFixed(3);
                                break;
                case 'Kilograms': 
                                    document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*6.35029.toFixed(3);
                                    break;
                case 'Ounces':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*224.0.toFixed(3);   
                                break;
                case 'Stones':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*1.0.toFixed(3);
                                break;
                case 'Grams':
                                document.getElementById('output').innerHTML = "Converted value ("+ to +"): " + value*6350.29.toFixed(3); 
                                break;
                default:
                            alert('Error');
            }
        }   
    }
});