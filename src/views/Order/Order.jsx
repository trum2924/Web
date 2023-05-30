import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout, getOrder, removeOrder } from "../../actions/order";
import Loading from "../../components/Loading/Loading";
import "./order.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../actions/cart";
import { getUser } from "../../actions/user";

export default function Order() {
  const dispatch = useDispatch();
  const curUser = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getOrder());
    dispatch(getUser(curUser.id));
  }, []);

  const order = useSelector((state) => state.order);
  const user = useSelector(state => state.user);
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    setListOrder(
      order.map((ord) => {
        return {
          id: ord.id,
          title: ord.title,
          price: getPriceOfPost(ord),
          checked: false,
        };
      })
    );
  }, [order]);

  const getPriceOfPost = (post) => {
    let price = 0;
    post.postDetailDtos.forEach((pdt) => {
      price += pdt.bookDto.price * pdt.quantity;
    });
    return post.fee + price;
  };
  const removePostInOrder = (id) => {
    dispatch(removeOrder(id));
    dispatch(removeFromCart(1));
  };

  const [sumTotal, setSumTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    listOrder.forEach((l) => {
      l.checked && (total += l.price);
    });
    setSumTotal(total);
    checkSelectAll();
  }, [listOrder]);

  const checkSelectAll = () => {
    let check = true;
    listOrder.forEach((l) => {
      !l.checked && (check = l.checked);
    });
    if (listOrder.length === 0 || !listOrder) {
      check = false;
    }
    setCheckAll(check);
  };

  const [checkAll, setCheckAll] = useState(false);
  const handleCheckAll = () => {
    // listOrder.forEach(l => {
    //   l.checked = !checkAll;
    // });
    setListOrder((prev) =>
      prev.map((l) => {
        return { ...l, checked: !checkAll };
      })
    );
    setCheckAll((prev) => !prev);
  };
  const handleCheck = (e, ind) => {
    setListOrder((prev) =>
      prev.map((l, index) => {
        if (index === ind) {
          return { ...l, checked: e.target.checked };
        } else {
          return l;
        }
      })
    );
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    let orders = [];
    listOrder.forEach((l) => {
      l.checked && orders.push({ id: l.id });
    });
    if(orders.length === 0){
      NotificationManager.error("Bạn chưa chọn bài đăng để thanh toán", "Lỗi", 1000);
    }else{
      setOpen(true);
    }
  };

  const handleCheckout = async () => {
    let orders = [];
    listOrder.forEach((l) => {
      l.checked && orders.push({ id: l.id });
    });
    const res = await dispatch(checkout({ orders }));
      if (res.success) {
        dispatch(removeFromCart(orders.length));
        setListOrder((prev) => prev.filter((l) => !l.checked));
        NotificationManager.success(res.message, "Thông báo", 1000);
      } else {
        NotificationManager.error(res.message, "Lỗi", 1000);
      }
    handleClose();
  };

  return order ? (
    <>
      <section className="hero-area bg-white shadow-sm pt-80px pb-80px">
        <NotificationContainer />
        <span className="icon-shape icon-shape-1"></span>
        <span className="icon-shape icon-shape-2"></span>
        <span className="icon-shape icon-shape-3"></span>
        <span className="icon-shape icon-shape-4"></span>
        <span className="icon-shape icon-shape-5"></span>
        <span className="icon-shape icon-shape-6"></span>
        <span className="icon-shape icon-shape-7"></span>
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="section-title pb-3">Giỏ hàng</h2>
          </div>
        </div>
      </section>
      <section className="cart-area pt-80px pb-80px position-relative">
        <div className="container">
          <form action="#" className="cart-form mb-50px table-responsive px-2">
            <table className="table generic-table table-center">
              <thead>
                <tr className="table-header">
                  <th scope="colSpan" className="check-col">
                    <Checkbox
                      checked={checkAll}
                      onChange={() => handleCheckAll()}
                    />
                    Chọn
                  </th>
                  <th scope="colSpan">Bài đăng</th>
                  <th scope="colSpan" style={{ width: "100px" }}>
                    Giá
                  </th>
                  <th scope="colSpan" style={{ width: "100px" }}></th>
                </tr>
              </thead>
              <tbody>
                {listOrder.map((post, index) => {
                  return (
                    <tr key={index}>
                      <th>
                        <Checkbox
                          checked={post.checked}
                          onChange={(e) => handleCheck(e, index)}
                        />
                      </th>
                      <th scope="row">
                        <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                          <Link
                            to={`/detail-post/${post.id}`}
                            className="media-img d-block media-img-sm"
                          >
                            <img
                              src="/images/default_img.jpeg"
                              alt="productImage"
                            />
                          </Link>
                          <div className="media-body">
                            <h5 className="fs-15 fw-medium">
                              <Link to={`/detail-post/${post.id}`}>
                                {post.title}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </th>
                      <td>{post.price}</td>
                      <td>
                        <button
                          className="icon-element icon-element-xs shadow-sm"
                          style={{ border: "none" }}
                          onClick={() => removePostInOrder(post.id)}
                        >
                          <i className="la la-times"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="6">
                    <div className="cart-actions d-flex align-items-center justify-content-between">
                      <div className="input-group my-2 w-auto">
                        Tổng tiền: {sumTotal} đồng
                      </div>
                      <div className="flex-grow-1 text-right my-2">
                        <button
                          className="btn theme-btn"
                          onClick={(e) => handleConfirm(e)}
                        >
                          Thanh toán
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Xác nhận thanh toán?</DialogTitle>
          <DialogContent>
            <p>Số tiền của bạn: {user?.balance} đ</p>
            <p>Số tiền còn lại sau thanh toán: {user?.balance - sumTotal} đ</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleCheckout()}>Xác nhận</Button>
            <Button onClick={handleClose}>Hủy</Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  ) : (
    <Loading />
  );
}
