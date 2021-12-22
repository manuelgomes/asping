// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_asping_db";
import UserModel from "../models/Asping_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.asping_db.host +
        ":" +
        properties.asping_db.port +
        "//" +
        properties.asping_db.user +
        "@" +
        properties.asping_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.asping_db.name,
      properties.asping_db.user,
      properties.asping_db.password,
      {
        host: properties.asping_db.host,
        dialect: properties.asping_db.dialect,
        port: properties.asping_db.port,
        logging: false
      }
    );
    this.dbConnection_asping_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_asping_db;
  }
}

export default new Database();
