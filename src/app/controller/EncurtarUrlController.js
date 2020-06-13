import UrlBuilder from '../builder/UrlBuilder';
import Url from '../model/Url';

class EncurtarUrlController {
    async store(req, res) {
        const { code } = await UrlBuilder.build(req.body.url);

        return res.json({ code });
    }

    async get(req, res) {
        const url = await Url.findOne({
            where: {
                code: req.params.code,
            },
        });

        if (!url) {
            return res.status(404).json();
        }

        return res.json({ newUrl: url.url_redirect });
    }
}

export default new EncurtarUrlController();
