import moment from "moment/moment";

const getImgUrl = (img) => {
  return "https://raw.githubusercontent.com/trum2924/BE/main" + img;
};

const isAdmin = (user) => {
  return user.roles[0] === "ROLE_ADMIN";
};
const getColorStatus = (status) => {
  switch (status) {
    case 2:
      return {
        color: "#EA5455",
        state: "Từ chối",
      };
    case 4:
      return {
        color: "#F0EB8D",
        state: "Đợi chấp thuận",
      };
    case 16:
      return {
        color: "#16FF00",
        state: "Chấp thuận",
      };
    case 32:
      return {
        color: "#FC7300",
        state: "Đã thanh toán",
      };
    case 64:
      return {
        color: "#1C82AD",
        state: "Đợi lấy sách",
      };
    case 128:
      return {
        color: "#D4D925",
        state: "Chưa trả sách",
      };
    case 256:
      return {
        color: "#3CCF4E",
        state: "Thành công",
      };
    case 512:
      return {
        color: "#ea8654",
        state: "Hết hạn",
      };
    default:
      return {
        color: "green",
        state: "default",
      };
  }
};

const getBookStatus = (status, bookInfo) => {
  if(status === 0){
    return {
      color: "#857e7b",
      state: "Trong kho"
    };
  }else if(status === 512){
    return {
      color: "#ea8654",
      state: "Hết hạn",
    };
  }else{
    if(bookInfo.length === 0){
      return {
        color: "#F0EB8D",
        state: "Đang sử dụng",
      };
    }else{
      return {
        color: "green",
        state: "Đã thuê",
      };
    }
  }
}

const convertToDay = (input) => {
  const day = new Date(input);
  return moment(day).format("D/MM/YYYY");
};

const getTimeAgo = (time) => {
  const curDate = new Date();
  const inputDate = new Date(time);
  const diff = curDate - inputDate;
  const msPerDay = 3600 * 24 * 1000;
  const msPerHour = 3600 * 1000;
  if (diff < msPerDay) {
    return `${Math.ceil(diff / msPerHour)} giờ trước`;
  } else {
    return convertToDay(time);
  }
};

const removeTones = (str) => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
  str = str.replace(/Đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, "");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replace(/ /g, "_");
  return str;
};

const formatMoney = (money) => {
  if(money)
  return money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
};

const compareDate = (target, start, end) => {
  let startTime = start.setHours(0,0,0,0);
  let temp = end.setDate(end.getDate() + 1);
  let endTime = (new Date(temp)).setHours(0,0,0,0);
  return target >= startTime && target <= endTime;
};

export {
  getImgUrl,
  isAdmin,
  getColorStatus,
  getTimeAgo,
  removeTones,
  formatMoney,
  compareDate,
  getBookStatus
};
