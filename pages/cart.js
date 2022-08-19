import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import productContext from "../context/productContext";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";


const Cart = () => {
  const [isloading, setIsloading] = React.useState(false)
  const { fetchProducts, products, cart, setCart } =
    React.useContext(productContext);
  const [orders, setOrders] = React.useState([]);
  let totalprice = 0;
  let finalprice;
  const router = useRouter();
  React.useEffect(() => {

    if (cart.items) {
      const { ids } = { ids: Object.keys(cart.items) };
      setIsloading(true)
      fetchProducts();

      ids.map((id) => {
        let [a] = products.filter((product) => {
          return product.id == id;
        });
        setOrders((current) => [...current, a]);
      });
      setIsloading(false)
    }
  }, []);
  React.useEffect(() => {
    setOrders([])
    if (cart.items) {
      const { ids } = { ids: Object.keys(cart.items) };

      ids.map((id) => {
        let [a] = products.filter((product) => {
          return product.id == id;
        });
        setOrders((current) => [...current, a]);
      });
    }
  }, [cart]);

  const handlecheckout = () => {
    router.push("/products");
    setCart({ items: "", totalItems: "" });
  };

  const handleQuantity = (id) => {
    return cart.items[id];
  };

  const handlePrice = (id, price) => {
    finalprice = price * handleQuantity(id);
    totalprice += finalprice;
    return finalprice;
  };

  const handleDelete = (id) => {
    let _cart = { ...cart }
    let qt = _cart.items[id]
    _cart.totalItems -= qt
    delete _cart.items[id]
    setCart(_cart)
  }

  return (
    <>
      {cart.items ? (
        <>
          <NextNProgress
            color="#29D"
            startPosition={1.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true} />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Image

                        src={order.image}
                        alt="Product image"
                        width={100}
                        height={100}
                      />

                    </TableCell>
                    <TableCell align="right">{order.title}</TableCell>
                    <TableCell align="right">
                      {handleQuantity(order.id)}
                    </TableCell>
                    <TableCell align="right">
                      ₹{handlePrice(order.id, order.price)}
                    </TableCell>
                    <TableCell align="right">
                      <Button onClick={() => { handleDelete(order.id) }} variant="contained" color="error">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ margin: "3rem" }}>
            <div>Total Price : ₹{totalprice}</div>
            <Button
              style={{ margin: "30px 0px" }}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                handlecheckout();
              }}
            >
              CHECK OUT
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 style={{ margin: "50px" }}>Your Cart is empty </h2>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
