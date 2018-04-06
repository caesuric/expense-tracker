export function updateBalances(categories, storage) {
    for (let category of categories) {
        category.balance += category.dailyAllowance
    }
    storage.set('categories', JSON.stringify(categories))
}
