// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Asping_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      based:  {
        type: Sequelize.INTEGER,
        references: {
          model: "base",
          key: '_id',
        },
      },
        
      pings:  {
        type: Sequelize.INTEGER,
        references: {
          model: "ping",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * base
      * ------------------------------------
      */
    class base extends Sequelize.Model{}
    base.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      as_of: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      country: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      lat: {
        type: Sequelize.FLOAT
      },
      
      lon: {
        type: Sequelize.FLOAT
      },
      
      postcode: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      until: {
        type: Sequelize.DATE
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      based: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "base", timestamps: false }
    );



    /**
      * ------------------------------------
      * ping
      * ------------------------------------
      */
    class ping extends Sequelize.Model{}
    ping.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      lat: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      lon: {
        type: Sequelize.FLOAT, 
        allowNull: false
      },
      
      when: {
        type: Sequelize.DATE, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      pings: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "ping", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
