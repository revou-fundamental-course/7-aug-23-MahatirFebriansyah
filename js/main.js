const alas = document.getElementById("alas")
const tinggi = document.getElementById("tinggi")
const hitung_luas = document.getElementById("hitung_luas")
const output = document.getElementById("output")
hitung_luas.addEventListener("click", function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5 * a * t
    output.innerHTML = ` Luas Segitiga Adalah = ${l}`
})

const sisi1 = document.getElementById("sisi1")
const sisi2 = document.getElementById("sisi2")
const sisi3 = document.getElementById("sisi3")
const hitung_keliling = document.getElementById("hitung_keliling")
const output_1 = document.getElementById("output_1")
hitung_keliling.addEventListener("click", function(){
    let s1 = sisi1.value
    let s2 = sisi2.value
    let s3 = sisi3.value
    let k = parseInt(s1)+parseInt(s2)+parseInt(s3)
    output_1.innerHTML = ` Keliling Segitiga Adalah = ${k}`
})

riset.addEventListener("click", function(){
    location.reload();
})

riset_luas.addEventListener("click", function(){
    location.reload();
})