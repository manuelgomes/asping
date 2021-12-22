import BaseModelGenerated from "./generated/BaseModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await BaseModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BaseModelGenerated,
  ...customModel
};
