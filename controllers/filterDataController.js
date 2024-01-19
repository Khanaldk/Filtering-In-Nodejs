import { ApiResponse } from "../middleware/ApiResponse";
import { asyncHandler } from "../middleware/asyncHandler";
import models from "../models";
import { Op } from "sequelize";

const filterDataController = {};

filterDataController.filterdata = asyncHandler(async (req, res) => {
  const filter = {
    [Op.or]: [
      {
        name: { [Op.like]: `${req.query.name}%` },
      },
      { age: { [Op.gte]: req.query.age } },
    ],
  };
  const findUser = await models.User.findAll({ where: filter });
  if (findUser) {
    return res.status(200).json({
      message: "Data created successfully",
      data: findUser,
    });
  }
  return res.status(500).json({
    message: "Something went wrong!",
  });
});

filterDataController.filterdataByPageAndId = asyncHandler(async (req, res) => {
  const pages = `${req.query.page}` * `${req.query.list}` - `${req.query.list}`;
  const subPage = pages + 1;

  const filter = {
    id: {
      [Op.between]: [subPage, pages + parseInt(`${req.query.list}`)],
    },
  };

  const findUser = await models.User.findAll({ where: filter });
  if (findUser) {
    return res.status(200).json({
      message: "Data created successfully",
      data: findUser,
    });
  }
  return res.status(500).json({
    message: "Something went wrong!",
  });
});

// filterDataController.postData = asyncHandler(async (req, res) => {
//   const data = {
//     name: req.body.name,
//     age: req.body.age,
//     address: req.body.address,
//   };
//   console.log(data);
//   const newData = await models.User.create(data);
//   if (newData) {
//     return res.status(200).json({
//       message: "Data created successfully",
//       data: data,
//     });
//   }
// });

export { filterDataController };
