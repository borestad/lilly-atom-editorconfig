module.exports = function() {
	return fs.readFileSync('templates/.editorconfig', "utf8").toString();
};