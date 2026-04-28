"use client";
export default function Home(){
return(
<main style={{fontFamily:"Arial, sans-serif",padding:"60px 20px",maxWidth:"1000px",margin:"0 auto",textAlign:"center"}}>
<header style={{marginBottom:"50px"}}>
<h1 style={{fontSize:"3.5rem",fontWeight:"bold",marginBottom:"10px"}}>Welcome to Bidly</h1>
<p style={{fontSize:"1.3rem",color:"#555"}}>Your online marketplace for buying, selling, and bidding on great items.</p>
</header>
<section style={{marginBottom:"60px"}}>
<h2 style={{fontSize:"2rem",marginBottom:"20px"}}>Why Bidly?</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"}}>
<div style={{padding:"20px",borderRadius:"12px",border:"1px solid #ddd",background:"#fafafa"}}>
<h3 style={{marginBottom:"10px"}}>Easy to Use</h3>
<p style={{color:"#666"}}>Create listings, browse items, and place bids with a clean and simple interface.</p>
</div>
<div style={{padding:"20px",borderRadius:"12px",border:"1px solid #ddd",background:"#fafafa"}}>
<h3 style={{marginBottom:"10px"}}>Fast & Secure</h3>
<p style={{color:"#666"}}>Your data and transactions are protected with modern security standards.</p>
</div>
<div style={{padding:"20px",borderRadius:"12px",border:"1px solid #ddd",background:"#fafafa"}}>
<h3 style={{marginBottom:"10px"}}>Community Driven</h3>
<p style={{color:"#666"}}>Join a growing community of buyers and sellers who love great deals.</p>
</div>
</div>
</section>
<section style={{marginBottom:"60px"}}>
<h2 style={{fontSize:"2rem",marginBottom:"20px"}}>Get Started</h2>
<ul style={{listStyle:"none",padding:0,fontSize:"1.2rem",color:"#444"}}>
<li style={{marginBottom:"10px"}}>• Browse listings posted by other users</li>
<li style={{marginBottom:"10px"}}>• Create your own listing in minutes</li>
<li style={{marginBottom:"10px"}}>• Place bids and win items you love</li>
</ul>
</section>
<section style={{marginBottom:"60px"}}>
<h2 style={{fontSize:"2rem",marginBottom:"20px"}}>Featured Categories</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"}}>
<div style={{padding:"15px",borderRadius:"10px",border:"1px solid #ddd",background:"#f7f7f7"}}>Electronics</div>
<div style={{padding:"15px",borderRadius:"10px",border:"1px solid #ddd",background:"#f7f7f7"}}>Vehicles</div>
<div style={{padding:"15px",borderRadius:"10px",border:"1px solid #ddd",background:"#f7f7f7"}}>Furniture</div>
<div style={{padding:"15px",borderRadius:"10px",border:"1px solid #ddd",background:"#f7f7f7"}}>Collectibles</div>
</div>
</section>
<footer style={{color:"#aaa",marginTop:"40px",fontSize:"0.9rem"}}>© {new Date().getFullYear()} Bidly — Marketplace made simple</footer>
</main>
);
}
