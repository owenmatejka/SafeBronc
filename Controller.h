#ifndef CONTROLLER
#define CONTROLLER
#include <string>
#include "login.h"
using namespace std;
class Controller{
public:
    void LogIn(string username, string password);
    void PanicButtonActivate();
    void GetResources();
    void setting();


};

#endif //CONTROLLER