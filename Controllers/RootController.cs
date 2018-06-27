using Microsoft.AspNetCore.Mvc;

namespace app_starter.Controllers
{
    public class RootController : Controller
    {
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}
