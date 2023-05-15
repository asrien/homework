const Sequelize = require('sequelize') // Class 

module.exports = class User extends Sequelize.Model{
    static init(sequelize){ // init() 메서드를 정의(User 모델을 초기화하는 역할) sequelize는 Sequelize 인스턴스를 전달받음
        return super.init({
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            username:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            userimage:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            userdt:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:"User",
            tableName:"helpme",
            charset:"utf8",
            collate:"utf8_general_ci",
        })
    }
    static associate (db){}
}