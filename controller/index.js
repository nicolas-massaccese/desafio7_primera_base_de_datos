const createArticles = async () => {
    const articlesToAdd = [
        {
            
        }
    ];
    try{
        await dbClient('articles').insert(articlesToAdd);
        console.log('Articles added');
    } catch(err) {
        console.error('Oh no error', err.message);
    } finally{
        dbClient.desrtoy();
    }
};

module.exports = { createArticles };