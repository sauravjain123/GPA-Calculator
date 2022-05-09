let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth = 0;
let sixth = 0;
let seventh = 0;
let eight = 0;

document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#ct').value);
second =parseInt(document.querySelector('#fov').value);
third =parseInt(document.querySelector('#at').value);
fourth = parseInt(document.querySelector('#dsp').value);
fifth =parseInt(document.querySelector('#pe').value);
sixth =parseInt(document.querySelector('#pe2').value);
seventh =parseInt(document.querySelector('#mini').value);
eight = parseInt(document.querySelector('#ife').value);    

let total = first*4+second*3+third*4+fourth*4+fifth*3+sixth*3+seventh*2+eight*2;
let total_sgpa =(total/25).toPrecision(3);

document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.output h3').innerHTML = `TOTAL SGPA =`
    document.querySelector('#ct').value = '';
    document.querySelector('#fov').value = '';
    document.querySelector('#at').value = '';
    document.querySelector('#dsp').value = '';
    document.querySelector('#pe').value = '';
    document.querySelector('#pe2').value = '';
    document.querySelector('#mini').value = '';
    document.querySelector('#ife').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
