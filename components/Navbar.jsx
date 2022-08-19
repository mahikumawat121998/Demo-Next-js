import { useContext, useState, useEffect } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import { Box } from "@mui/material";
import productContext from "../context/productContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Navbar = () => {
  const { cart, setCart } = useContext(productContext)
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const abc = window.localStorage.getItem('cart')
    setCart(JSON.parse(abc))
  }, [])
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <Box className={style.mainContainer}>
      <div className={style.container}>
        <li className={style.myList}><Link style={{ color: "green" }} className={style.logoHeading} href="/">MARKTINE DIGITAL AGENCY</Link></li>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link className={style.menuItem}  href="/">HOME</Link>
          </li>
          <li   className={style.listItem}>
            <Link className={style.menuItem} href="/about">ABOUT</Link>
          </li>
          <li  className={style.listItem}>
            <Link href="/products">PRODUCT</Link>
          </li>
          <li   className={style.listItem}>
            <Link className={style.menuItem} href="faq">FAQ</Link>
          </li>
          <li className={style.listItem}>
            <Link className={style.menuItem} href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className={style.hamburger} onClick={() => setOpen(!open)}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.line} />
        </div>
        <ul onClick={() => setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
          <li className={style.menuItem}>
            <Link className={style.menuItem} style={{ color: "white" }} href="/">HOME</Link>
          </li>          
        </ul>
        <ul  >
          <li>
            <Link style={{ color: "white" }} href="/cart"><AddShoppingCartIcon style={{color:"white",verticalAlign:"middle", cursor:"pointer"}} />
            </Link>     
            <span style={{color:"white"}}>Cart</span>

            {/* <span className={style.cartNumber}>
              
              {!cart.totalItems ? 0 : cart.totalItems}
              Cart
              
              </span> */}

          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Navbar;
