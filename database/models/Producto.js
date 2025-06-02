module.exports = function (sequelize, dataTypes){

    let alias = 'Producto'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        foto: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        id_usuario:{
            type: dataTypes.INTEGER
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName : "productos",
        timestamps: true, 
        underscored: true,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        });
        Producto.hasMany(models.Comentario, {
        as: 'comentarios', 
        foreignKey: 'id_producto'
        });
    };

    return Producto;
}