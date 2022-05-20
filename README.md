## Example Registering category and Specification in memory, using expressjs

Category
name: category
columns

- ID UUID auto increment primary key
- name text not null
- description text not null unique
- created_at datetime not null

Specification
name: Specification
columns

- ID UUID auto increment primary key
- name text not null
- description text not null unique
- created_at datetime not null

documentation http://localhost:3333/api-docs

## 🚀 Usage


Just run the following command in the root of your project to install the dependencies:

```sh
yarn install
```

command to run project

```sh
yarn dev
```

