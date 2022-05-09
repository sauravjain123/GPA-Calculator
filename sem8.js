let first=0;
let second=0;
let third=0;
let fourth=0;


document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#IPR').value);
second =parseInt(document.querySelector('#OE').value);
third =parseInt(document.querySelector('#MPW').value);
fourth =parseInt(document.querySelector('#SoI').value);

let total = first*2+second*3+third*9+fourth*2;
let total_sgpa =(total/16);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#IPR').value = '';
    document.querySelector('#OE').value = '';
    document.querySelector('#MPW').value = '';
    document.querySelector('#SoI').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
