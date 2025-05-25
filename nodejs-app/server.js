const express = require("express");


const app = express()

const PORT = 5000
const userData = require("./MOCK_DATA.JSON");
const graphql = require("graphql")


const { GraphQLObjectType, GraphQlSchema , GraphQLList, GraphQLInt , GraphQLString} = graphql;
const { graphqlHTTP } = require("express-graphql")



const UserType = new GraphQLObjectType({
    name : 'User',
    fields: () =>({
        id: { type : GraphQLInt},
        firstName : { type: GraphQLString},
        lastName : { type: GraphQLString},
        email : {type: GraphQLString},
        password : {type : GraphQLString}
    })
})


const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields:{
        getAllUsers:{
            type : new GraphQLList(UserType),
            args : {id : {type : GraphQLList}},
            resolve(parent, args){
                return userData;
            }
        },
        findUserById{
            type:UserType,
            description :"fetch single user",
            args{id : {type: GraphlQLI}}
        }
    }
})