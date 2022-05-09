let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#ccn').value);
second =parseInt(document.querySelector('#msd').value);
third =parseInt(document.querySelector('#ct2').value);
fourth = parseInt(document.querySelector('#pe3').value);
fifth =parseInt(document.querySelector('#ce').value);
sixth =parseInt(document.querySelector('#oe').value);
seventh =parseInt(document.querySelector('#ee').value);
eight = parseInt(document.querySelector('#ts').value);    

let total = first*4+second*4+third*4+fourth*3+fifth*3+sixth*3+seventh*2+eight*2;
let total_sgpa =(total/25).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#ccn').value = '';
    document.querySelector('#msd').value = '';
    document.querySelector('#ct2').value = '';
    document.querySelector('#pe3').value = '';
    document.querySelector('#ce').value = '';
    document.querySelector('#oe').value = '';
    document.querySelector('#ee').value = '';
    document.querySelector('#ts').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
