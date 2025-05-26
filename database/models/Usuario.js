module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasenia: {
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.DATE,
        },
        fotoPerfil:{
            type: dataTypes.STRING,
        },
         created_at:{
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        delated_at: {
            type: dataTypes.DATE,
        }
    }

    let config = {
        tableName : "usuarios",
        timestamps: false,
        underscored: true,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_usuario'
        });

        Usuario.hasMany(models.Comentario, {
        as: 'comentarios', 
        foreignKey: 'id_usuario'
        });
    };
    
    return Usuario;
}