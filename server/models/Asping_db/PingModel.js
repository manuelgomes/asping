import PingModelGenerated from "./generated/PingModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PingModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PingModelGenerated,
  ...customModel
};
