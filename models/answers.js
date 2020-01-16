module.exports = function(sequilize, DataTypes){
  const Answers = sequilize.define(`Answers`,{
    id: {
        type: DataTypes.INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    poll_id: {
        type: DataTypes.INTEGER ,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, 
{
    freezeTableName: true
}); 
    return Answers;
};
