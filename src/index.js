module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Função executada com sucesso!",
        input: event,
      },
      null,
      2
    ),
  };
};
