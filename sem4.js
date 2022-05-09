let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#maths11').value);
second =parseInt(document.querySelector('#cs').value);
third =parseInt(document.querySelector('#lic').value);
fourth = parseInt(document.querySelector('#mc').value);
fifth =parseInt(document.querySelector('#ss').value);
sixth =parseInt(document.querySelector('#hdl').value);
seventh =parseInt(document.querySelector('#evs').value);
eight = parseInt(document.querySelector('#kannad').value);    

let total = first*4+second*4+third*4+fourth*4+fifth*4+sixth*3+seventh*1+eight*1;
let total_sgpa =(total/25).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#maths11').value = '';
    document.querySelector('#cs').value = '';
    document.querySelector('#lic').value = '';
    document.querySelector('#mc').value = '';
    document.querySelector('#ss').value = '';
    document.querySelector('#hdl').value = '';
    document.querySelector('#evs').value = '';
    document.querySelector('#kannad').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
