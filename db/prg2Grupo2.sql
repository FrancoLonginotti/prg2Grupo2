CREATE SCHEMA prg2Grupo2;

USE prg2Grupo2;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    fotoPerfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    foto VARCHAR(255),
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    id_usuario INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100) NOT NULL,
    id_producto INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    id_usuario INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios (email, contrasenia, fecha, dni, fotoPerfil)
VALUES('josefina@gmail.com', '1234jOSE', 20050106, 46443234, '/images/user/default-image.png');

INSERT INTO usuarios (email, contrasenia, fecha, dni, fotoPerfil)
VALUES('franco@gmail.com', '1234franco', 20040819, 45443234, '/images/user/default-image.png');

INSERT INTO usuarios (email, contrasenia, fecha, dni, fotoPerfil)
VALUES('marcos@gmail.com', '1234marcos', 20050715, 46443235, '/images/user/default-image.png');

INSERT INTO usuarios (email, contrasenia, fecha, dni, fotoPerfil)
VALUES('maria@gmail.com', 'mariaa++', 19900710, 22443235, '/images/user/default-image.png');

INSERT INTO usuarios (email, contrasenia, fecha, dni, fotoPerfil)
VALUES('ignacio@gmail.com', 'nacho++', 20001201, 38443235, '/images/user/default-image.png');


INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-powerBank.jpg', 'Powerbank Leles PG', 'Cargador solar de 49800 mAh - Cargador portátil de carga rápida', 1);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-bolsaDormir.jpg', 'Bolsa de dormir SouthPort', 'Bolsa de dormir con cierre', 1);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-carpa.jpg', 'Carpa Naturehike', 'Carpa para 3 personas', 2);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-carpa2.jpg', 'Carpa ETNA2', 'Carpa profesional', 2);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-linterna.jpg', 'Linterna Led', 'Linterna led de mano de 640 lumen', 3);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-mochila.jpg', 'Mochila Trekking PRO', 'Mochila de camping de 70L con bolsillos y tiras ajustables', 3);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-navaja.jpg', 'Navaja Victorinox', 'Navaja multiuso de bolsillo', 4);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-parlante.jpg', 'JBL Charge 5', 'Parlante resistente al agua y al polvo', 4);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-silla.jpg', 'Silla plegable', 'Silla plegable con apoya brazos', 5);

INSERT INTO productos (foto, nombre, descripcion, id_usuario)
VALUES('/images/products/img-termoStanley.jpg', 'Termo Stanley', 'Termo Stanley de 1.4 lts, mantiene tus bebidas frías o calientes por horas.', 5);

INSERT INTO comentarios (texto, id_producto, id_usuario)
VALUES('Me encanta este producto! Lo recomiendo.', 1, 1),
	  ('El producto funciona muy bien!', 1, 2),
      ('De lo mejor que encontre en el mercado, gran precio!', 1, 3),
      ('Me encanta este producto! Lo recomiendo.', 2, 4),
      ('El producto funciona muy bien!', 2, 5),
      ('De lo mejor que encontre en el mercado, gran precio!', 2, 1),
      ('Me encanta este producto! Lo recomiendo.', 3, 2),
      ('El producto funciona muy bien!', 3, 3),
      ('De lo mejor que encontre en el mercado, gran precio!', 3, 4),
      ('Me encanta este producto! Lo recomiendo.', 4, 4),
      ('El producto funciona muy bien!', 4, 5),
      ('De lo mejor que encontre en el mercado, gran precio!', 4, 1),
      ('Me encanta este producto! Lo recomiendo.', 5, 2),
	  ('El producto funciona muy bien!', 5, 5),
	  ('De lo mejor que encontre en el mercado, gran precio!', 5, 3),
	  ('Me encanta este producto! Lo recomiendo.', 6, 2),
	  ('El producto funciona muy bien!', 6, 3),
	  ('De lo mejor que encontre en el mercado, gran precio!', 6, 4),
	  ('Me encanta este producto! Lo recomiendo.', 7, 4),
	  ('El producto funciona muy bien!', 7, 5),
	  ('De lo mejor que encontre en el mercado, gran precio!', 7, 1),
	  ('Me encanta este producto! Lo recomiendo.', 8, 1),
	  ('El producto funciona muy bien!', 8, 2),
	  ('De lo mejor que encontre en el mercado, gran precio!', 8, 3),
	  ('Me encanta este producto! Lo recomiendo.', 9, 4),
	  ('El producto funciona muy bien!', 9, 2),
	  ('De lo mejor que encontre en el mercado, gran precio!', 9, 3),
	  ('Me encanta este producto! Lo recomiendo.', 10, 4),
	  ('El producto funciona muy bien!', 10, 2),
	  ('De lo mejor que encontre en el mercado, gran precio!', 10, 3);