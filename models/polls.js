module.exports = function(sequilize, DataTypes){
    const Polls = sequilize.define(`Polls`,{
        id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
            question: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        freezeTableName: true
    }); 
      return Polls;
  };