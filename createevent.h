#ifndef EVENT
#define EVENT
#include <string>

using namespace std;
class API_layer{
public:
    void LogIn(string username, string password);
    void PanicButtonActivate();
    void GetResources();
    void setting();


};

#endif //API_layer