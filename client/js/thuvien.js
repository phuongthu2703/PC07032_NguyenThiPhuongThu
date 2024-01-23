//cài đặt mặc định
document.getElementById("showcart").style.display="none"

var giohang = new Array();


    document.getElementById('addToCartBtn').addEventListener('click', function() {
        // Lấy thông tin sản phẩm từ các phần tử HTML tương ứng
        var hinh = document.querySelector('.img-fluid.rounded-circle').src;
        var tensp = document.querySelector('.h3').innerText;
        var gia = document.querySelector('.text-primary.mb-1').innerText;
       
       

        // Tạo một đối tượng sản phẩm
      

        var product = new Array(hinh, tensp, gia);


        // Thêm sản phẩm vào giỏ hàng (giả sử giohang đã được khai báo và tồn tại)
        giohang.push(product);

        // Hiển thị thông báo hoặc cập nhật giao diện người dùng
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
            // console.log(giohang);
    showcountsp();
    //lưu giỏ hàng lên sessionStorage
    
    sessionStorage.setItem("giohang", JSON.stringify(giohang))
    });

;



function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}

function showmycart(){
    var ttgh = "";
    var tong = 0;
    for( let i = 0; i < giohang.length; i++){
        var tt=parseInt(giohang[i][2])
        tong += tt;
        ttgh+=`<td>${i+1}</td>
        <td><img src="${giohang[i][0]}" alt=""></td>
        <td>${giohang[i][1]}</td>
        <td>${giohang[i][2]}</td>
      
        <td>
            <div>${tt}</div>
        </td>
    </tr>`
        
    }
ttgh +=`<tr>
<th colspan="5">
Tổng đơn hàng
</th>
<th>
    <div>${tong}</div>
</th>
</tr>`

document.getElementById("mycart").innerHTML = ttgh;
}

function showcart(){
    
    var x = document.getElementById("showcart");
    if(x.style.display=="block"){
        x.style.display="none";
    }else{
        x.style.display="block";    
        showmycart();
    }
   
}


function showgiohang_trangthanhtoan(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for( let i = 0; i < giohang.length; i++){
        var tt=parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh+=`<td>${i+1}</td>
        <td><img src="${giohang[i][0]}" alt=""></td>
        <td>${giohang[i][2]}</td>
        <td>${giohang[i][1]}</td>
        <td>${giohang[i][3]}</td>
        <td>
            <div>${tt}</div>
        </td>
    </tr>`
        
    }
ttgh +=`<tr>
<th colspan="5">
Tổng đơn hàng
</th>
<th>
    <div>${tong}</div>
</th>
</tr>`

document.getElementById("mycart").innerHTML = ttgh;
}