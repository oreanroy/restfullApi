# restfullApi
A node and express based restful API, with monogo atlas for data storage.
<br>
<h3>Dependencies</h3>
<p><strong>morgan</strong> to log request.</p>
<p><strong>mongoose</strong> easy connection and read write operation on mongo</p>
<p><strong>multer</strong> to upload files</p>
<p><strong>node brcypt</strong> to hash and salt password </p> 
<h3> End Points</h3>
<h3>POST</h3>
<p>To add a product with the api defined body structure</p>
<a href="http://localhost:3000/products/">http://localhost:3000/products/</a>
<p>To create an order in the defined body structure</p>
<a href="http://localhost:3000/orders">http://localhost:3000/orders</a>
<p> To create a new user with the defined body structure</p>
<a href="http:://localhost:300/user/signup">http:://localhost:300/user/signup</a>
<p> To login as an user, with the defined body structure</p>
<a href="http:://localhost:300/user/login">http:://localhost:300/user/signup</a>
<br>
<h3>GET Request</h3>
<p>Get request to get all the avialabe products</p>
<a href="http://localhost:3000/products/">http://localhost:3000/products/</a>
<P>Get request to get all an individual product, substitute the product id with product id you obatin form get request to product</p>
<a href="http://localhost:3000/products/:productId">http://localhost:3000/products/:productId</a>
<p>To get all the orders</p>
<p>You need to login to get the orders</p>
<a href="http://localhost:3000/orders">http://localhost:3000/orders</a>
<p>To get details of an individual order replace the order id(individual) with the id you obatain on geting all the product</p>
<a href="http://localhost:3000/orders/orderId">http://localhost:3000/orders</a>
<br>
<h3>DELETE Request</h3>
<p>To delete a product, you need to loged in to delete an project</p>
<a href="http://localhost:3000/products/productId">http://localhost:3000/products/productId</a>
<p> To delete an order, you should be logged in to perform this task and body</p>
<p>Replace the order id with the order id</p>
<a href="http://localhost:3000/orders/orderId">http://localhost:3000/orders/orderId</a>
<p> To delete an user, with the body in defined format</p>
<p>Replace the user id with the origian user id string</p>
<a href="http://localhost:3000/users/userId">http://localhost:3000/orders/orderId</a>
<br>
<h3>PATCH Request</h3>
<p>To change an product details, json body in the specified format. Should be logged in.</p>
<a href="http://localhost:3000/products/productId">http://localhost:3000/products/productId</a>

<h4>Citaions and copyright metions</h4>
<a href="https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q" style="color: blue";>Academind tutorial on youtube</a>



