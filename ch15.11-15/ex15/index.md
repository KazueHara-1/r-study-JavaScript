パスやクエリはURLに表れてしまうため、ユーザーが容易に確認できてしまう。
また、URLが流出してしまうと自動的に機密情報も流出することになってしまう。
そのため機密情報はヘッダに格納し、URLを共有するだけでは機密情報共有とならないようにしている。
