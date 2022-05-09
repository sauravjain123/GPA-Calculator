let first=0;
let second=0;
let third=0;
let fourth=0;
let fifth=0;
let sixth=0;
// let first=0;
// let first=0;
document.querySelector('#but_sub').addEventListener('click',() =>{
first =parseInt(document.querySelector('#Physics').value);
second =parseInt(document.querySelector('#EME').value);
third =parseInt(document.querySelector('#Maths').value);
fourth =parseInt(document.querySelector('#C_prog').value);
fifth =parseInt(document.querySelector('#ECE').value);
sixth =parseInt(document.querySelector('#kannada').value);
let total =first*5+second*4+third*4+fourth*3+fifth*3+sixth*0;
let total_sgpa =(total/20);
// document.querySelector('#but_sub').addEventListener('click',() =>{
//  first=0;
// let second=0;
// let third=0;
// let fourth=0;
// let fifth=0;
// let sixth=0;
// }
// )
document.querySelector('.output h3').innerHTML=`Total SGPA=${total_sgpa}`
}
)
// )



document.querySelector('#res').addEventListener('click', () => {
    document.querySelector('.cgpa_output h1').innerHTML = `TOTAL SGPA =`
    document.querySelector('#Physics').value = '';
    document.querySelector('#EME').value = '';
    document.querySelector('#Maths').value = '';
    document.querySelector('#C_prog').value = '';
    document.querySelector('#ECE').value = '';
    document.querySelector('#kannada').value = '';
    // document.querySelector('#seven-gpa').value = '';
    // document.querySelector('#eight-gpa').value = '';
})
