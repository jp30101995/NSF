using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Google.Cloud.Translation.V2;
using Query.Data;

namespace Query.Business
{
    public class TranslationBL
    {
        private readonly PersonClass _person;
        public TranslationBL()
        {
            _person = new PersonClass();
        }
        public bool Translate(string srcLang, string destLang)
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", @"D:\SourceCode\Learning\festive-idea-237805-f10c950f0cbf.json");
            Console.OutputEncoding = System.Text.Encoding.Unicode;
            TranslationClient client = TranslationClient.Create();
            var response = client.TranslateText("Hello World.", destLang, srcLang);
            Console.WriteLine(response.TranslatedText);
            return false;
        }
    }
}
