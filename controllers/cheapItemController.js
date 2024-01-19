import models from "../models";
import { asyncHandler } from "../middleware/asyncHandler";
import { Op } from "sequelize";

const cheapItemController = {};

// cheapItemController.postItem = asyncHandler(async (req, res) => {
//   const data = {
//     productName: req.body.productName,
//     price: req.body.price,
//   };
//   const newData = await models.Product.create(data);
//   if (newData) {
//     return res.status(200).json({
//       message: "Data created successfully!!",
//       data: data,
//     });
//   }
// });

cheapItemController.findAllItem = asyncHandler(async (req, res) => {
  const findData = await models.Product.findAll();
  if (findData) {
    return res.status(200).json({
      message: "All product retrieved successfully!",
      Product: findData,
    });
  }
});

cheapItemController.getCheapItem = asyncHandler(async (req, res) => {
  const priceArr = [];
  const findItem = await models.Product.findAll();
  const selectPrice = findItem.forEach((value) => {
    const item = value.price;
    priceArr.push(item);
  });

  function priceSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const currentElement = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentElement;
    }

    return arr;
  }
  const sortedPrice = priceSort(priceArr.slice());
  const cheapListItem = req.query.cheapItem;
  let k = 0;
  const filter = {
    price: {
      [Op.between]: [sortedPrice[k], sortedPrice[cheapListItem - 1]],
    },
  };

  const findCheapPriceOnly = await models.Product.findAll({
    where: filter,
  });
  if (findCheapPriceOnly) {
    return res.status(201).json({
      message: "Cheap product retrieved successfully!",
      cheapProduct: findCheapPriceOnly,
    });
  }
});

export { cheapItemController };
