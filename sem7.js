let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#BFE').value);
second =parseInt(document.querySelector('#ESD').value);
third =parseInt(document.querySelector('#RFM').value);
fourth = parseInt(document.querySelector('#CE2').value);
fifth =parseInt(document.querySelector('#OE2').value);
sixth =parseInt(document.querySelector('#PMF').value);
seventh =parseInt(document.querySelector('#MP3').value);
eight = parseInt(document.querySelector('#AMC').value);    

let total = first*2+second*4+third*2+fourth*3+fifth*3+sixth*2+seventh*3+eight*0;
let total_sgpa =(total/19).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#BFE').value = '';
    document.querySelector('#ESD').value = '';
    document.querySelector('#RFM').value = '';
    document.querySelector('#CE2').value = '';
    document.querySelector('#OE2').value = '';
    document.querySelector('#PMF').value = '';
    document.querySelector('#MP3').value = '';
    document.querySelector('#AMC').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
