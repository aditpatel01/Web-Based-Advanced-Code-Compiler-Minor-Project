# from translate import Translator


# def translateText(text_to_translate, target_language):
#     text_to_translate = text_to_translate
#     strTolang = target_language
#     translator = Translator(to_lang=strTolang)
#     translate = translator.translate(text_to_translate)
#     return (str(translate))


# from translate import Translator
# def translateText(text_to_translate, target_language):
#     text_to_translate=text_to_translate
#     translator= Translator(to_lang='hi')
#     translation = translator.translate('hi how are you')
#     return (str(translation))

# translator= Translator(to_lang="gu")
# translation = translator.translate("This is a pen.")
# print(translation)


import urllib3
http = urllib3.PoolManager()
r = http.request('GET', 'https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/ecf670d')
resu=r.data[:2]
print(resu.decode('utf-8'))

# "https://he-s3.s3.amazonaws.com/media/userdata/AnonymousUser/code/ecf670d",