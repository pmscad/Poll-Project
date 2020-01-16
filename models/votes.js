module.exports = function(sequilize, DataTypes){
    const Votes = sequilize.define(`Votes`,{
        id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
            answer_id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
        },
            unique_id: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, 
    {
        freezeTableName: true
    });
      return Votes;
  };
