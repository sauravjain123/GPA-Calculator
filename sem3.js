let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#maths1').value);
second =parseInt(document.querySelector('#eca').value);
third =parseInt(document.querySelector('#aec').value);
fourth = parseInt(document.querySelector('#minipr').value);
fifth =parseInt(document.querySelector('#dec').value);
sixth =parseInt(document.querySelector('#fth').value);
seventh =parseInt(document.querySelector('#msa').value);
eight = parseInt(document.querySelector('#constitution').value);    

let total = first*4+second*4+third*4+fourth*1+fifth*4+sixth*4+seventh*3+eight*1;
let total_sgpa =(total/25).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#maths1').value = '';
    document.querySelector('#eca').value = '';
    document.querySelector('#aec').value = '';
    document.querySelector('#minipr').value = '';
    document.querySelector('#dec').value = '';
    document.querySelector('#fth').value = '';
    document.querySelector('#msa').value = '';
    document.querySelector('#constitution').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
