let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#maths').value);
second =parseInt(document.querySelector('#enm').value);
third =parseInt(document.querySelector('#chem').value);
fourth = parseInt(document.querySelector('#ed').value);
fifth =parseInt(document.querySelector('#ele').value);
sixth =parseInt(document.querySelector('#english').value);
// seventh =parseInt(document.querySelector('#msa').value);
// eight = parseInt(document.querySelector('#constitution').value);    

let total = first*4+second*4+third*5+fourth*3+fifth*4+sixth*0;
let total_sgpa =(total/20).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#maths').value = '';
    document.querySelector('#enm').value = '';
    document.querySelector('#chem').value = '';
    document.querySelector('#ed').value = '';
    document.querySelector('#ele').value = '';
    document.querySelector('#english').value = '';
    // document.querySelector('#msa').value = '';
    // document.querySelector('#constitution').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
