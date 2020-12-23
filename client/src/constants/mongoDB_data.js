const MongoDBDatabase_user = {
  _id: {
    $oid: "59cf9308e4c21a29d8c609b2"
  },
  googleId: "105171812119530131188",
  __v: 0
};

const MongoDBDatabase_scenes = [
  {
    _id: "5f75c7f3009b2117e96bb88b",
    name: "Multiple Colliding Sides",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      y: 565,
      x: 2
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      restitution: 1,
      display: true
    },
    currentEvents: {
      drag: {
        ids: [],
        state: false
      },
      hover: {
        ids: [],
        state: false
      },
      collision: {
        pairs: [],
        ids: [],
        state: false
      },
      doubleClick: {
        ids: [],
        state: false
      },
      click: {
        ids: [],
        state: false
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3db4ylZXkG8Hd2iaKAgk2zUqqhwfqHFEmjpNaYoKZf+sEEWw0SNG0ssY0pBKlRmxQQNUGCRaKpSU0VbcsHqlWqNRo/WKlNqwFSCZU2KhYFW4ktsGpT2rq7zRlyltlxZuedOee87/U+94/ED8KZ97mf33XvJteembNr991335HOPwQIECBAgAABAgQIECBAgMCoAmsK+qj+DidAgAABAgQIECBAgAABAusCCrpFIECAAAECBAgQIECAAAECAQIKekAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgECCnpACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBAgp6QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQIrLej33ntvd+mll3b33HPP+lUvvvji7sorr+xOPPHEQa7+6KOPdu985zu7m2+++Zjzbrzxxu6CCy5Y/3cPP/xwd/nll3e33Xbb+v+/4oorussuu+zo6++4447uVa961TFff/7553ezZ5x22mmD3MMhBAgQIECAAAECBAgQWKXAWWed1R06dOjoEdddd1134YUXrvLIlTx76vdYWUGfl/N3vOMd3Qtf+MJ1/Pe9733dgw8+OFhJn5fv2R8SzGfYuAXzGd/whjesF/b561/5ylceLfC33nprd/vttw8280q21EMJECBAgAABAgQIECCwjcC5557bHTx4sJuX8nnJ/dSnPtU9//nPn4xbC/dYWUHfqtjOCvE111zTXX311d0s9FX/s9N5W/2Bwea5Z6+Z/bPxXfVVz+35BAgQIECAAAECBAgQGELglltu6d761rd255xzTvfpT396/cit/t0QsyxyRiv36F3QZ8V19q3gH//4x495R/zOO+9c/3bvhx56aMfyvVNhPl4gW70jv/kd8s1levbt6e9///u3/Hb0+be/n3feeUffLd98fp/XLLJEvpYAAQIECBAgQIAAAQJjCrzpTW/qPvnJT3az7yJ+73vfe3SU2RuqJ598cnfXXXeNOV7vs1u5R++CPpOZFeB5IZ8V5quuumq9APd9N3xW8mfh7+Xnt+dl+cCBA0ffzT5eAZ/NO/9DhY2pzn/+fF7uL7nkku5zn/vc0Z9T3/gz6Jt/Pn32HD9/3vvXiBcSIECAAAECBAgQIBAu8IpXvKK7++67j357+3zceceb9b4p/NPKPXZV0OeF9bnPfW73pS99qZv/7HafwOYftrbxHfg+X7fxNZsL/k7ffr7xDxRmH+i28WfMZ0V79h0B3//+94/+IcP8v7/gBS9Y/0OAzT+jPi/9e/1Dht3e1+sJECBAgAABAgQIECCwSoFWim0r99hVQZ8txrxo7+YT2edfs/HT0/eyZBu/zX32Jzqzgr3dB8Bt9/x5yX/729/ezf63+etnsx7vOwO2+iC5vdzF1xAgQIAAAQIECBAgQGBsgVaKbSv32HVBn3/beN9v9V5WOZ8v7vxd8xe/+MXb/nz58ZZ8/m3x2xX0nX5O3s+lj/1biPMJECBAgAABAgQIEFiWQCs/u93KPXZV0OfvYL/2ta/tvva1r3Ubfx58qwVZxre1b37u7JmzbzGffWDBSSedtO2nq29XpDd+SvsHP/jB7pnPfOYxHxK38efaZ/fd/CFzO/3Vbcv6heI5BAgQIECAAAECBAgQWLVAK59+3so9ehf0zR/SttWnqm9cnp3++14XbeMHt+308+ybf2Z980yb3y3f/DPoW307+9B/l/tenXwdAQIECBAgQIAAAQIE+gi08PeHz+7Zwj16F/TNH7g2A5gV4Nm70LN3mWf/bPw7zmevv+GGG7bch3mx3ulD3rZbpq1mmb12q+dt/iT3zaV+Xtrvueee9eM2for77P9v/iT33fzsfZ9fDF5DgAABAgQIECBAgACBsQVmn/F16NCho2Ncd9113YUXXjj2WLs+f+r36F3Qdy3T4wtm5Xf2V5xddNFFPV79+Ev2Wux3dYgXEyBAgAABAgQIECBAgACBAQVGLeizn/d+4IEHjvkZ8J3uPiv1s09Zn32Ce9+/f32nZ/rvBAgQIECAAAECBAgQIEBgbIFRC/rnP//59ZLdt2jPv1190b+ubWx05xMgQIAAAQIECBAgQIAAgc0CoxZ0cRAgQIAAAQIECBAgQIAAAQKPCSjoNoEAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQIKOgBIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgECCjoASEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBAgo6AEhGIEAAQIECBAgQIAAAQIECCjo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AgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEBAQQ8IwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCBAQEEPCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAgQEBBDwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIEDg/wHwFHMtAIYihQAAAABJRU5ErkJggg==",
    __v: 0,
    rules: [
      {
        actions: [
          {
            newValue: "red",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        ruleType: "oneToOne",
        eventType: "hover",
        shapeId: 5
      },
      {
        actions: [
          {
            newValue: "yellow",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        ruleType: "oneToOne",
        eventType: "hover",
        shapeId: 6
      },
      {
        applyToPartner: true,
        actions: [
          {
            newValue: "red",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        selfLogicalOperators: [],
        selfConditions: [
          {
            comparisonValue: "red",
            operator: "===",
            propertyName: "fillColour"
          }
        ],
        ruleType: "manyToOne",
        eventType: "collision"
      }
    ],
    throwArray: [],
    shapes: [
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 0,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 0,
            x: 36
          },
          location: {
            y: -297,
            x: 0.5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 297,
          x: -19
        },
        boundingRect: {
          radius: 300.53951487283666,
          vertices: [
            {
              y: -297,
              x: -17.5
            },
            {
              y: -297,
              x: 18.5
            },
            {
              y: 303,
              x: 18.5
            },
            {
              y: 303,
              x: -17.5
            }
          ],
          centre: {
            y: 3,
            x: 0.5
          },
          maxY: 303,
          minY: -297,
          maxX: 18.5,
          minX: -17.5
        },
        vertices: [
          {
            y: -297,
            x: -17.5
          },
          {
            y: -297,
            x: 18.5
          },
          {
            y: 303,
            x: 18.5
          },
          {
            y: 303,
            x: -17.5
          }
        ],
        centreOfMass: {
          y: 297,
          x: -19
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 1,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 0,
            x: 36
          },
          location: {
            y: -297,
            x: 0.5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 297,
          x: 1018
        },
        boundingRect: {
          radius: 300.53951487283666,
          vertices: [
            {
              y: -297,
              x: -17.5
            },
            {
              y: -297,
              x: 18.5
            },
            {
              y: 303,
              x: 18.5
            },
            {
              y: 303,
              x: -17.5
            }
          ],
          centre: {
            y: 3,
            x: 0.5
          },
          maxY: 303,
          minY: -297,
          maxX: 18.5,
          minX: -17.5
        },
        vertices: [
          {
            y: -297,
            x: -17.5
          },
          {
            y: -297,
            x: 18.5
          },
          {
            y: 303,
            x: 18.5
          },
          {
            y: 303,
            x: -17.5
          }
        ],
        centreOfMass: {
          y: 297,
          x: 1018
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 2,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 1000,
            z: 0,
            y: 0,
            x: 1000
          },
          location: {
            y: -17.5,
            x: 5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 619,
          x: 500
        },
        boundingRect: {
          radius: 500.3238950919694,
          vertices: [
            {
              y: -17.5,
              x: -495
            },
            {
              y: -17.5,
              x: 505
            },
            {
              y: 18.5,
              x: 505
            },
            {
              y: 18.5,
              x: -495
            }
          ],
          centre: {
            y: 0.5,
            x: 5
          },
          maxY: 18.5,
          minY: -17.5,
          maxX: 505,
          minX: -495
        },
        vertices: [
          {
            y: -17.5,
            x: -495
          },
          {
            y: -17.5,
            x: 505
          },
          {
            y: 18.5,
            x: 505
          },
          {
            y: 18.5,
            x: -495
          }
        ],
        centreOfMass: {
          y: 619,
          x: 500
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 3,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 1000,
            z: 0,
            y: 0,
            x: 1000
          },
          location: {
            y: -17.5,
            x: 5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: -20,
          x: 500
        },
        boundingRect: {
          radius: 500.3238950919694,
          vertices: [
            {
              y: -17.5,
              x: -495
            },
            {
              y: -17.5,
              x: 505
            },
            {
              y: 18.5,
              x: 505
            },
            {
              y: 18.5,
              x: -495
            }
          ],
          centre: {
            y: 0.5,
            x: 5
          },
          maxY: 18.5,
          minY: -17.5,
          maxX: 505,
          minX: -495
        },
        vertices: [
          {
            y: -17.5,
            x: -495
          },
          {
            y: -17.5,
            x: 505
          },
          {
            y: 18.5,
            x: 505
          },
          {
            y: 18.5,
            x: -495
          }
        ],
        centreOfMass: {
          y: -20,
          x: 500
        }
      },
      {
        events: {
          subscribed: true
        },
        type: "",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 4,
        fillColour: "#6495ED",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -6.123233995736766e-17,
            x: 1
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 36,
            x: 0
          },
          location: {
            y: 73.53090153090153,
            x: 1.5309015309015308
          }
        },
        physics: {
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: 153870205.5807974,
          mass: 21164,
          density: 1
        },
        centreOfRotation: {
          y: 300,
          x: 500.0000000000014
        },
        boundingRect: {
          radius: 127.27922061357856,
          vertices: [
            {
              y: -88.46909846909847,
              x: -88.46909846909847
            },
            {
              y: -88.46909846909847,
              x: 91.53090153090153
            },
            {
              y: 91.53090153090153,
              x: 91.53090153090153
            },
            {
              y: 91.53090153090153,
              x: -88.46909846909847
            }
          ],
          centre: {
            y: 1.5309015309015308,
            x: 1.5309015309015308
          },
          maxY: 91.53090153090153,
          minY: -88.46909846909847,
          maxX: 91.53090153090153,
          minX: -88.46909846909847
        },
        vertices: [
          {
            y: 55.53090153090153,
            x: 1.5309015309015308
          },
          {
            y: 91.53090153090153,
            x: 1.5309015309015308
          },
          {
            y: 91.53090153090153,
            x: -88.46909846909847
          },
          {
            y: -88.46909846909847,
            x: -88.46909846909847
          },
          {
            y: -88.46909846909847,
            x: 91.53090153090153
          },
          {
            y: 91.53090153090153,
            x: 91.53090153090153
          },
          {
            y: 91.53090153090153,
            x: 1.5309015309015308
          },
          {
            y: 55.53090153090153,
            x: 1.5309015309015308
          },
          {
            y: 55.53090153090153,
            x: 55.53090153090153
          },
          {
            y: -52.46909846909847,
            x: 55.53090153090153
          },
          {
            y: -52.46909846909847,
            x: -52.46909846909847
          },
          {
            y: 55.53090153090153,
            x: -52.46909846909847
          }
        ],
        centreOfMass: {
          y: 300,
          x: 500.0000000000014
        }
      },
      {
        events: {
          subscribed: true
        },
        type: "",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 5,
        fillColour: "#6495ED",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            magnitude: 1,
            z: 0,
            y: -0.7071067811865476,
            x: 0.7071067811865475
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 25.45584412271571,
            x: 25.455844122715714
          },
          location: {
            magnitude: 17.507141400011598,
            z: 0,
            y: -12.020815280171309,
            x: 12.727922061357853
          }
        },
        physics: {
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: -0.05,
            x: 0.05
          },
          momentOfInertiaCOM: 279720,
          mass: 1296,
          density: 1
        },
        centreOfRotation: {
          y: 302,
          x: 500
        },
        boundingRect: {
          radius: 25.45584412271571,
          vertices: [
            {
              y: -17.5,
              x: -17.5
            },
            {
              y: -17.5,
              x: 18.5
            },
            {
              y: 18.5,
              x: 18.5
            },
            {
              y: 18.5,
              x: -17.5
            }
          ],
          centre: {
            y: 0.5,
            x: 0.5
          },
          maxY: 18.5,
          minY: -17.5,
          maxX: 18.5,
          minX: -17.5
        },
        vertices: [
          {
            magnitude: 24.748737341529164,
            z: 0,
            y: -24.748737341529164,
            x: -1.7763568394002505e-15
          },
          {
            magnitude: 25.465663156493687,
            z: 0,
            y: 0.7071067811865461,
            x: 25.45584412271571
          },
          {
            magnitude: 26.162950903902257,
            z: 0,
            y: 26.162950903902257,
            x: 1.7763568394002505e-15
          },
          {
            magnitude: 25.465663156493687,
            z: 0,
            y: 0.7071067811865497,
            x: -25.45584412271571
          }
        ],
        centreOfMass: {
          y: 302,
          x: 500
        }
      }
    ]
  },
  {
    _id: "5f75c84379580a06d55efc56",
    name: "Two Arrows",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 0,
      y: 580
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3db6zfdXUH8A8tyxqsxKqIMfXBqDqE8MdBFY2uRk0ADVBMTYc4JUMlcysp3YgPNiDAAyUmQsA9mI9ItrqxUSW4TGNCpsFlOjCLQ6ogdcTgNhakVuso/QPL9+qvu1xue3+359z28/udV59B7zm/c17n1wfv/v70uMcff/z55hcBAgQIECBAgAABAgQIECBwTAWOE9CPqb8HJ0CAAAECBAgQIECAAAECMwICuicCAQIECBAgQIAAAQIECBDoQEBA7+AIRiBAgAABAgQIECBAgAABAgK65wABAgQIECBAgAABAgQIEOhAQEDv4AhGIECAAAECBAgQIECAAAECArrnAAECBAgQIECAAAECBAgQ6EBAQO/gCEYgQIAAAQIECBAgQIAAAQICuucAAQIECBAgQIAAAQIECBDoQGBJA/qePXvazTff3LZu3Tqz6uWXX96uu+66tmLFiqOy+tzHHz3obbfd1tavXz/znzt27GibNm1q27dvn/nv2b83/Pex3uGoQHkQAgQIECBAgAABAgRKC6xZs6YdOHDgoMEtt9zSNm7cOHEmk77Hkgb022+/vT355JMzoXz4NYT1k08+uV199dVH5dA7d+5smzdvngng55577osec/T7l1566UxgH4X1m2666eDPH+sdjgqUByFAgAABAgQIECBAoKzAWWed1Xbt2tVGoXwUcu+999525plnTozLNOyxZAF9CLs33nhju+GGG9pw4OHXfP9vKa+90OM9+OCD7Y477ph51XzVqlUzo9xzzz3tgQcemPlLhZ/85CfHfIel9NGbAAECBAgQIECAAIHaAnfddVf75Cc/2c4444z25S9/eQZjvv/Xu9K07DF2QB+C6/Bq9N133/2CV5e/853vzATcp59++gVhdr7wO3q7+PCK9XyvaB/u6PO9uj33FfLh1e7h1+gV+vlmmP0YCwX0733vey8K8JEden9Sm48AAQIECBAgQIAAgVoC11xzTfvSl77Uhox26623Hlx+eJF15cqV7bvf/e5EgEzLHmMH9OEqQwAeBfIhMF9//fUzAXb0Cvnsy81+JXr0mfNRuF27du3Bz4CPe+1R7ey3yC8UwEd/qTD7MWZ/xnzuW9zn/nf2DuPu6ucIECBAgAABAgQIECBwNAQu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6tVTLpC7Hs9cT90IECBAgECmgICeqakXAQIECKQLzA2Uy/f+TzvpF19pH/3w+9Mfq0JDnhWubEcCBAgQmFQBAX1SL2duAgQIFBGYHSh3/+gf2/vPO6G9ee05RbbPX5NnvqmOBAgQIEAgS0BAz5LUhwABAgSWRGAIlNd8alt7zaplbcvHLuu3qfEAABv4SURBVG4rVqxYksep0pRnlUvbkwABAgQmUUBAn8SrmZkAAQLFBB5++OF2+umnF9t66dbluXS2OhMgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAkIKAnQWpDgAABAgQIECBAgAABAgQiAgJ6RE8tAQIECBAgQIAAAQIECBBIEhDQkyC1IUCAAAECBAgQIECAAAECEQEBPaKnlgABAgQIECBAgAABAgQIJAkI6EmQ2hAgQIAAAQIECBAgQIAAgYiAgB7RU0uAAAECBAgQIECAAAECBJIEBPQkSG0IECBAgAABAgQIECBAgEBEQECP6KklQIAAAQIECBAgQIAAAQJJAgJ6EqQ2BAgQIECAAAECBAgQIEAgIiCgR/TUEiBAgAABAgQIECBAgACBJAEBPQlSGwIECBAgQIAAAQIECBAgEBEQ0CN6agkQIECAAAECBAgQIECAQJKAgJ4EqQ0BAgQIECBAgAABAgQIEIgICOgRPbUECBAgQIAAAQIECBAgQCBJQEBPgtSGAAECBAgQIECAAAECBAhEBAT0iJ5aAgQIECBAgAABAgQIECCQJCCgJ0FqQ4AAAQIECBAgQIAAAQIEIgICekRPLQECBAgQIECAAAECBAgQSBIQ0JMgtSFAgAABAgQIECBAgAABAhEBAT2ip5YAAQIECBAgQIAAAQIECCQJCOhJkNoQIECAAAECBAgQIECAAIGIgIAe0VNLgAABAgQIECBAgAABAgSSBAT0JEhtCBAgQIAAAQIECBAgQIBAREBAj+ipJUCAAAECBAgQIECAAAECSQICehKkNgQIECBAgAABAgQIECBAICIgoEf01BIgQIAAAQIECBAgQIAAgSQBAT0JUhsCBAgQIECAAAECBAgQIBARENAjemoJECBAgAABAgQIECBAgECSgICeBKkNAQIECBAgQIAAAQIECBCICAjoET21BAgQIECAAAECBAgQIEAgSUBAT4LUhgABAgQIECBAgAABAgQIRAQE9IieWgIECBAgQIAAAQIECBAgkCQgoCdBakOAAAECBAgQIECAAAECBCICAnpETy0BAgQIECBAgAABAgQIEEgSENCTILUhQIAAAQIECBAgQIAAAQIRAQE9oqeWAAECBAgQIECAAAECBAgkCQjoSZDaECBAgAABAgQIECBAgACBiICAHtFTS4AAAQIECBAgQIAAAQIEkgQE9CRIbQgQIECAAAECBAgQIECAQERAQI/oqSVAgAABAgQIECBAgAABAkkCAnoSpDYECBAgQIAAAQIECBAgQCAiIKBH9NQSIECAAAECBAgQIECAAIEkAQE9CVIbAgQIECBAgAABAgQIECAQERDQI3pqCRAgQIAAAQIECBAgQIBAkoCAngSpDQECBAgQIECAAAECBAgQiAgI6BE9tQQIECBAgAABAgQIECBAIElAQE+C1IYAAQIECBAgQIAAAQIECEQEBPSInloCBAgQIECAAAECBAgQIJAk8H8H20ziyquSmgAAAABJRU5ErkJggg==",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 499.99999999999983,
          y: 250
        },
        centreOfRotation: {
          x: 499.99999999999983,
          y: 250
        },
        vertices: [
          {
            x: 11.476744186046513,
            y: -5.983899821109123
          },
          {
            x: 11.476744186046513,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604652,
            y: 0.016100178890876567
          },
          {
            x: 11.476744186046513,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046513,
            y: 6.016100178890877
          },
          {
            x: -38.52325581395348,
            y: 6.016100178890877
          },
          {
            x: -38.52325581395348,
            y: -5.983899821109123
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.60554561735,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395348,
          maxX: 36.47674418604652,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953483,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395348,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604652,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604652,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395348,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046513,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 415.99999999999983,
          y: 250
        },
        centreOfRotation: {
          x: 415.99999999999983,
          y: 250
        },
        vertices: [
          {
            x: 11.476744186046513,
            y: -5.983899821109123
          },
          {
            x: 11.476744186046513,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604652,
            y: 0.016100178890876567
          },
          {
            x: 11.476744186046513,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046513,
            y: 6.016100178890877
          },
          {
            x: -38.52325581395348,
            y: 6.016100178890877
          },
          {
            x: -38.52325581395348,
            y: -5.983899821109123
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.60554561735,
          velocity: {
            x: 0.03,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395348,
          maxX: 36.47674418604652,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953483,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395348,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604652,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604652,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395348,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046513,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      }
    ]
  },
  {
    _id: "5f7590c63788e4fc4c864982",
    name: "Multiple object collisions",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 20,
      y: 408
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3dX6huZZ0H8CeIOFGGCqJRCKaBRhcdTNJuCicyoYFCnS5KCJPqpgg9MxBknf6ATHNGoropLISDxHSMumjmEBNiNEyKOcYwldCxuhlQBBMNlAgc1qZ397pnn3fvtd61nvV71u9zoIv0fdfzez7fn8LXd/952e9///sXiz8ECBAgQIAAAQIECBAgQIDArAIvU9Bn9Xc4AQIECBAgQIAAAQIECBDYEVDQLQIBAgQIECBAgAABAgQIEAggoKAHCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggICCHiAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQACCnqAEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQCCExa0B9//PHyiU98ovzqV7/aueoHP/jBcscdd5QjR47sXv2rX/1queuuu3b+/zve8Y7yla98pZx33nmz0PzgBz8oDz/88EtmfOGFF8oXv/jFcu+99571Dj//+c/LjTfeuDvzfffdV9761rfOcgeHEiBAgAABAgQIECBAoK/AJZdcUl588cXdt332s58tt9xyS9/HzP761u8xWUFflfMvfOELu2W1K+NPPvnkbgHuCvH3v//93VK+9+/XTHc179GjR19S0Ndn6ubpyvqFF15YPvnJT+6Mt/eeXVnvlvlrX/taufTSS2tewVkECBAgQIAAAQIECBDoLXDFFVeU559/fqfHdKV8VXJPnTpVrrrqqt7Pm+sNS7jHZAV9v0+juzL7+c9/vnzuc58r559/fvnUpz618wn76tPmP/zhD//vr9UId/Up+bPPPlte85rX7Bb09XlXZXvvX9vvnl2p7/6sSnyNOziDAAECBAgQIECAAAECfQW+/e1vl+5D1Te84Q3l/vvv33n7fn+t73Nrv34p9zh0Qe+KaFeo1798uyuijzzyyM4n4E8//fRu+T7bJ8fr5bYLbFXW11/fPfPiiy8u73vf+3pluirZ659udw9YL8vdp9vdJ9t7v4x+9Zru3PUvcd/v9atz3v/+9+/8hwUFvVdMXkyAAAECBAgQIECAQCCBW2+9tfz4xz8u73rXu8rdd9+9O1n3KXr3rcm//vWvA0179lGWco9D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JECAwMwCCvrMATieAAECBAgQCC+goIePyIAECBBYhsDxEyfLc+WCMJc5pzxVjh+7Ocw8BiFAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQICAgm4HCBAgQIAAAQIECBAgQIBAAAEFPUAIRiBAgAABAgQIECBAgAABAgq6HSBAgAABAgQIECBAgAABAgEEFPQAIRiBAAECBAgQIECAAAECBAgo6HaAAAECBAgQIECAAAECBAgEEFDQA4RgBAIECBAgQIAAAQIECBAgoKDbAQIECBAgQIAAAQIECBAgEEBAQQ8QghEIECBAgAABAgQIECBAgICCbgcIECBAgAABAgQIECBAgEAAAQU9QAhGIECAAAECBAgQIECAAAECCrodIECAAAECBAgQIECAAAECAQQU9AAhGIEAAQIECBAgQIAAAQIECCjodoAAAQIECBAgQIAAAQIECAQQUNADhGAEAgQIECBAgAABAgQIECCgoNsBAgQIECBAgAABAgQIECAQQEBBDxCCEQgQIECAAAECBAgQIECAgIJuBwgQIECAAAECBAgQIECAQAABBT1ACEYgQIAAAQIECBAgQIAAAQIKuh0gQIAAAQIECBAgQIAAAQIBBBT0ACEYgQABAgQIECBAgAABAgQIKOh2gAABAgQIECBAgAABAgQIBBBQ0AOEYAQCBAgQIECAAAECBAgQIKCg2wECBAgQIECAAAECBAgQIBBAQEEPEIIRCBAgQIAAAQIECBAgQIDA/wGZXcgtNMITRQAAAABJRU5ErkJggg==",
    __v: 0,
    rules: [],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 430,
          y: 300
        },
        centreOfRotation: {
          x: 430,
          y: 300
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 570,
          y: 200
        },
        centreOfRotation: {
          x: 570,
          y: 200
        },
        vertices: [
          {
            x: -17.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: 18.5
          },
          {
            x: -17.5,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: 1296,
          momentOfInertiaCOM: 279720,
          velocity: {
            x: -0.05,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 0.5,
            y: 0.5
          },
          vertices: [
            {
              x: -17.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: 18.5
            },
            {
              x: -17.5,
              y: 18.5
            }
          ],
          radius: 25.45584412271571
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -17.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 570,
          y: 400
        },
        centreOfRotation: {
          x: 570,
          y: 400
        },
        vertices: [
          {
            x: -17.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: 18.5
          },
          {
            x: -17.5,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: 1296,
          momentOfInertiaCOM: 279720,
          velocity: {
            x: -0.05,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 0.5,
            y: 0.5
          },
          vertices: [
            {
              x: -17.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: 18.5
            },
            {
              x: -17.5,
              y: 18.5
            }
          ],
          radius: 25.45584412271571
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -17.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 6
      }
    ]
  },
  {
    _id: "5f75c76b17d31916ad662bad",
    name: "Newton's Cradle",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 4,
      y: 516
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3dC6zmdXkn8B8zwADDwFBhoOhamwGLbTcry02pVdTKegEL622NpJe1a5uIxira1a2w6ibuKqJFNm1pm9hU4lYRxHUFh62toigCIkYjKuxiFymXyGWYkWGum/eYd3o4nJnzvr/zzJz3ed7PJKQp5//8/s/zef6SfOe9nH3uvPPOHc0fAgQIECBAgAABAgQIECBAYEkF9hHQl9TfzQkQIECAAAECBAgQIECAwIyAgO5BIECAAAECBAgQIECAAAECEyAgoE/AErRAgAABAgQIECBAgAABAgQEdM8AAQIECBAgQIAAAQIECBCYAAEBfQKWoAUCBAgQIECAAAECBAgQICCgewYIECBAgAABAgQIECBAgMAECAjoE7AELRAgQIAAAQIECBAgQIAAAQHdM0CAAAECBAgQIECAAAECBCZAYK8F9DvuuKO95z3vaRdccEFbu3btXhl906ZN7X3ve1+77LLLHne/j3zkI+2ss8563L978MEH2/nnn9/e8pa3PKG/iy++uF100UUz1z/vec9rg/rDDjtsr8zgJgQIECBAgAABAgQIENjTAk972tMed4vzzjuvnXvuuXv6tuHnZ59jrwT0YVC+5ZZb2kc/+tG9FtAHoXsQuN/0pje1E088cZfLH153//33P66/Yd+Dwne/+93tgAMOaIOwfu+99+78/8OfKAcSIECAAAECBAgQIEBgLwoce+yxbcuWLW0Yyoch9+Mf/3h7znOesxc7WdytKsyxVwL6Zz7zmXbFFVfMaO/NV9BHedX+pptuaq985Svbc5/73Cf0N/jZ4FX12X+pMMqZi3usVBMgQIAAAQIECBAgQGDvCFxyySXtwgsvbEcffXS7/vrrZ24637/bO93036XKHCMH9EHIHrwaffnll+98NXrwavLNN98885bvBx54YN63sA9C7iDgDl7FHlzfG9AHwXhwxnvf+96d95/7Cvng/MGfN7/5zTP/d3jvXb0lffgK+dlnnz3zlvW5b8EfzHzjjTd6tbz/fycqCRAgQIAAAQIECBCYYIHXvva17Wtf+1p79rOf3T7xiU/s7HTwKvp+++3XfvjDH05w9//cWpU5Rg7og9FnB/JBYJ776vLczc0O0PMF4HE2PQzTRx555MgBfPiXCrPvM9/nzwc/n++V8WHgf+pTnzrzlxODPz6DPs7WXEuAAAECBAgQIECAwCQLnHrqqe3uu+/e+fb2Ya/Dt7nfeeedk9z+zt6qzDFWQB8G7uOOO65dd9117Q1veMMTvmxt9vZmv6Id8dbwQeC+8sord35J29xXzOc+ObP/QmHwFwTD/gevmM/9krhdBfTBl8PNDvVzz0zxtGqSAAECBAgQIECAAAEC8whUCbZV5hgroA/2OfzM9ute97rdvvV77tvLIwL67Le5D74JfpQvgJv7DM4N+cOf7+4V9OFb5gfX7i7k+188AQIECBAgQIAAAQIEMglUCbZV5hg7oA/fNr7QW71n/2qyuQ/ort5mPsqDPHzVfLCAwWfbx/2VZ7v6XPqoAX34VvuTTjppt+8eGGUW1xAgQIAAAQIECBAgQGApBap8drvKHGMF9OEr2Oecc0777ne/22Z/HnyhhyriFfTBPQYBe/A294MPPritXLly5+fR595/V0F6V1/8Nl9/w3sNf8Xa4B6j/uq2hTz8nAABAgQIECBAgAABAkstUOXbz6vMMXJAn/slbfN9q/ruHq6ogD4MyF/60pce943y89177tvZd9fzfP3NF/J9Bn2p/xPi/gQIECBAgAABAgQIRApU+P3hA48Kc4wc0OcLpoMAfOmll8681XzwZ+6vKZv90Iz6FvJRHrRdheT5vjRu7je5z/41cQv1N/j5MKRfdtllM5cv9Nb+Ufp3DQECBAgQIECAAAECBCZJYPit7cOezjvvvHbuuedOUosj9ZJ9jpED+kgaY140eDX8mmuuaYPPC4zzZ6Fvbx/nLNcSIECAAAECBAgQIECAAIFJEFjSgD74jPddd9011petDUL94PevD77BffBN7v4QIECAAAECBAgQIECAAIEKAksa0NetWzcTskcN2sO3qy/mW+ArLM0MBAgQIECAAAECBAgQIFBPYEkDej1OExEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAgQIAAgT4BAb3PTRUBAgQIECBAgAABAgQIEAgVENBDOR1GgAABAgQIECBAgAABAgT6BAT0PjdVBAgQIECAAAECBAgQIEAgVEBAD+V0GAECBAgQIECAAAECBAgQ6BMQ0PvcVBEgQIAAAQIECBAgQIAAgVABAT2U02EECBAgQIAAAQIECBAgQKBPQEDvc1NFgAABAgQIECBAgAABAgRCBQT0UE6HESBAgAABAgQIECBAgACBPgEBvc9NFQECBAgQIECAAAECBAgQCBUQ0EM5HUaAAAECBAgQIECAAAECBPoEBPQ+N1UECBAgQIAAAQIECBAgQCBUQEAP5XQYAQIECBAgQIAAAQIECBDoExDQ+9xUESBAgAABAgQIECBAgACBUAEBPZTTYQQIECBAgAABAgQIECBAoE9AQO9zU0WAAAECBAgQIECAAAECBEIFBPRQTocRIECAAAECBAgQIECAAIE+AQG9z00VAQIECBAgQIAAAQIECBAIFRDQQzkdRoAAAQIECBAgQIAAAQIE+gQE9D43VQQIECBAgAABAgQIECBAIFRAQA/ldBgBAgQIECBAgAABAgQIEOgTEND73FQRIECAAAECBAgQIECAAIFQAQE9lNNhBAgQIECAAAECBAgQIECgT0BA73NTRYAAAQIECBAgQIAAAQIEQgUE9FBOhxEgQIAAAQIECBAg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",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 470.0000000000002,
          y: 300
        },
        centreOfRotation: {
          x: 470.0000000000002,
          y: 300
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 510.0000000000002,
          y: 300
        },
        centreOfRotation: {
          x: 510.0000000000002,
          y: 300
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 550.0000000000002,
          y: 300
        },
        centreOfRotation: {
          x: 550.0000000000002,
          y: 300
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 6
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 650.0000000000002,
          y: 300
        },
        centreOfRotation: {
          x: 650.0000000000002,
          y: 300
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: -0.05,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 7
      }
    ]
  },
  {
    _id: "5f75c97f624f2dfb9cb0bcab",
    name: "Flying Arrows",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      y: 584,
      x: 3
    },
    cursorOnshape: false,
    selected: "_delete",
    timeStep: 16,
    time: 0,
    settings: {
      restitution: 1,
      display: true
    },
    currentEvents: {
      drag: {
        ids: [],
        state: false
      },
      hover: {
        ids: [],
        state: false
      },
      collision: {
        pairs: [],
        ids: [],
        state: false
      },
      doubleClick: {
        ids: [],
        state: false
      },
      click: {
        ids: [],
        state: false
      }
    },
    imageURL:
      "data:image/png;base64,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AgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAAAECBAgQIECAAIESAgJ6iTEoggABAgQIECBAgAABAgS6Cwjo3TdA/wQIECBAgAABAgQIECBQQkBALzEGRRAgQIAAAQIECBAgQIBAdwEBvfsG6J8AAQIECBAgQIAAAQIESggI6CXGoAgCBAgQIECAAAECBAgQ6C4goHffAP0TIECAAAECBAgQIECAQAkBAb3EGBRBgAABAgQIECBAgAABAt0FBPTuG6B/AgQIECBAgAABAgQIECghIKCXGIMiCBAgQIAAAQIECBAgQKC7gIDefQP0T4AAAQIECBAgQIAAAQIlBAT0EmNQBAECBAgQIECAAAECBAh0FxDQu2+A/gkQIECAAAECBAgQIECghICAXmIMiiBAgAABAgQIECBAgACB7gICevcN0D8BAgQIECBAgAABAgQIlBAQ0EuMQREECBAgQIAAAQIECBAg0F1AQO++AfonQIAAAQIECBAgQIAAgRICAnqJMSiCAAECBAgQIECAAAECBLoLCOjdN0D/BAgQIECAAAECBAgQIFBCQEAvMQZFECBAgAABAgQIECBAgEB3AQG9+wbonwABAgQIECBAgAABAgRKCAjoJcagCAIECBAgQIAAAQIECBDoLiCgd98A/RMgQIAAAQIECBAgQIBACQEBvcQYFEGAAAECBAgQIECAAAEC3QUE9O4boH8CBAgQIECAAAECBAgQKCEgoJcYgyIIECBAgAABAgQIECBAoLuAgN59A/RPgAABAgQIECBAgAABAiUEBPQSY1AEAQIECBAgQIAAAQIECHQXENC7b4D+CRAgQIAAAQIECBAgQKCEgIBeYgyKIECAAAECBAgQIECAAIHuAgJ69w3QPwECBAgQIECAAAECBAiUEBDQS4xBEQQIECBAgAABAgQIECDQXUBA774B+idAgAABAgQIECBAgACBEgICeokxKIIAAQIECBAgQIAAAQIEugsI6N03QP8ECBAgQIAAAQIECBAgUEJAQC8xBkUQIECAAAECBAgQIECAQHcBAb37BuifAAECBAgQIECAAAECBEoICOglxqAIAgQIECBAgAABAgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAAAECBAgQIECAAIESAgJ6iTEoggABAgQIECBAgAABAgS6Cwjo3TdA/wQIECBAgAABAgQIECBQQkBALzEGRRAgQIAAAQIECBAgQIBAdwEBvfsG6J8AAQIECBAgQIAAAQIESggI6CXGoAgCBAgQIECAAAECBAgQ6C4goHffAP0TIECAAAECBAgQIECAQAkBAb3EGBRBgAABAgQIECBAgAABAt0FBPTuG6B/AgQIECBAgAABAgQIECghIKCXGIMiCBAgQIAAAQIECBAgQKC7gIDefQP0T4AAAQIECBAgQIAAAQIlBAT0EmNQBAECBAgQIECAAAECBAh0FxDQu2+A/gkQIECAAAECBAgQIECghICAXmIMiiBAgAABAgQIECBAgACB7gICevcN0D8BAgQIECBAgAABAgQIlBAQ0EuMQREECBAgQIAAAQIECBAg0F1AQO++AfonQIAAAQIECBAgQIAAgRICAnqJMSiCAAECBAgQIECAAAECBLoLCOjdN0D/BAgQIECAAAECBAgQIFBCQEAvMQZFECBAgAABAgQIECBAgEB3AQG9+wbonwABAgQIECBAgAABAgRKCAjoJcagCAIECBAgQIAAAQIECBDoLiCgd98A/RMgQIAAAQIECBAgQIBACQEBvcQYFEGAAAECBAgQIECAAAEC3QUE9O4boH8CBAgQIECAAAECBAgQKCEgoJcYgyIIECBAgAABAgQIECBAoLuAgN59A/RPgAABAgQIECBAgAABAiUEBPQSY1AEAQIECBAgQIAAAQIECHQXENC7b4D+CRAgQIAAAQIECBAgQKCEgIBeYgyKIECAAAECBAgQIECAAIHuAgJ69w3QPwECBAgQIECAAAECBAiUEBDQS4xBEQQIECBAgAABAgQIECDQXUBA774B+idAgAABAgQIECBAgACBEgICeokxKIIAAQIECBAgQIAAAQIEugsI6N03QP8ECBAgQIAAAQIECBAgUEJAQC8xBkUQIECAAAECBAgQIECAQHcBAb37BuifAAECBAgQIECAAAECBEoICOglxqAIAgQIECBAgAABAgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAAAECBAgQIECAAIESAgJ6iTEoggABAgQIECBAgAABAgS6Cwjo3TdA/wQIECBAgAABAgQIECBQQkBALzEGRRAgQIAAAQIECBAgQIBAdwEBvfsG6J8AAQIECBAgQIAAAQIESggI6CXGoAgCBAgQIECAAAECBAgQ6C4goHffAP0TIECAAAECBAgQIECAQAkBAb3EGBRBgAABAgQIECBAgAABAt0FBPTuG6B/AgQIECBAgAABAgQIECghIKCXGIMiCBAgQIAAAQIECBAgQKC7gIDefQP0T4AAAQIECBAgQIAAAQIlBAT0EmNQBAECBAgQIECAAAECBAh0FxDQu2+A/gkQIECAAAECBAgQIECghICAXmIMiiBAgAABAgQIECBAgACB7gICevcN0D8BAgQIECBAgAABAgQIlBAQ0EuMQREECBAgQIAAAQIECBAg0F1AQO++AfonQIAAAQIECBAgQIAAgRICAnqJMSiCAAECBAgQIECAAAECBLoLCOjdN0D/BAgQIECAAAECBAgQIFBCQEAvMQZFECBAgAABAgQIECBAgEB3AQG9+wbonwABAgQIECBAgAABAgRKCAjoJcagCAIECBAgQIAAAQIECBDoLiCgd98A/RMgQIAAAQIECBAgQIBACQEBvcQYFEGAAAECBAgQIECAAAEC3QUE9O4boH8CBAgQIECAAAECBAgQKCEgoJcYgyIIECBAgAABAgQIECBAoLuAgN59A/RPgAABAgQIECBAgAABAiUEBPQSY1AEAQIECBAgQIAAAQIECHQXENC7b4D+CRAgQIAAAQIECBAgQKCEgIBeYgyKIECAAAECBAgQIECAAIHuAgJ69w3QPwECBAgQIECAAAECBAiUEBDQS4xBEQQIECBAgAABAgQIECDQXUBA774B+idAgAABAgQIECBAgACBEgICeokxKIIAAQIECBAgQIAAAQIEugsI6N03QP8ECBAgQIAAAQIECBAgUEJAQC8xBkUQIECAAAECBAgQIECAQHcBAb37BuifAAECBAgQIECAAAECBEoICOglxqAIAgQIECBAgAABAgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAAAECBAgQIECAAIESAgJ6iTEoggABAgQIECBAgAABAgS6Cwjo3TdA/wQIECBAgAABAgQIECBQQkBALzEGRRAgQIAAAQIECBAgQIBAdwEBvfsG6J8AAQIECBAgQIAAAQIESggI6CXGoAgCBAgQIECAAAECBAgQ6C4goHffAP0TIECAAAECBAgQIECAQAkBAb3EGBRBgAABAgQIECBAgAABAt0FBPTuG6B/AgQIECBAgAABAgQIECghIKCXGIMiCBAgQIAAAQIECBAgQKC7gIDefQP0T4AAAQIECBAgQIAAAQIlBAT0EmNQBAECBAgQIECAAAECBAh0FxDQu2+A/gkQIECAAAECBAgQIECghICAXmIMiiBAgAABAgQIECBAgACB7gICevcN0D8BAgQIECBAgAABAgQIlBAQ0EuMQREECBAgQIAAAQIECBAg0F1AQO++AfonQIAAAQIECBAgQIAAgRICAnqJMSiCAAECBAgQIECAAAECBLoLCOjdN0D/BAgQIECAAAECBAgQIFBCQEAvMQZFECBAgAABAgQIECBAgEB3AQG9+wbonwABAgQIECBAgAABAgRKCAjoJcagCAIECBAgQIAAAQIECBDoLiCgd98A/RMgQIAAAQIECBAgQIBACQEBvcQYFEGAAAECBAgQIECAAAEC3QUE9O4boH8CBAgQIECAAAECBAgQKCEgoJcYgyIIECBAgAABAgQIECBAoLuAgN59A/RPgAABAgQIECBAgAABAiUEBPQSY1AEAQIECBAgQIAAAQIECHQXENC7b4D+CRAgQIAAAQIECBAgQKCEgIBeYgyKIECAAAECBAgQIECAAIHuAgJ69w3QPwECBAgQIECAAAECBAiUEBDQS4xBEQQIECBAgAABAgQIECDQXUBA774B+idAgAABAgQIECBAgACBEgICeokxKIIAAQIECBAgQIAAAQIEugsI6N03QP8ECBAgQIAAAQIECBAgUEJAQC8xBkUQIECAAAECBAgQIECAQHcBAb37BuifAAECBAgQIECAAAECBEoICOglxqAIAgQIECBAgAABAgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAAAECBAgQIECAAIESAgJ6iTEoggABAgQIECBAgAABAgS6Cwjo3TdA/wQIECBAgAABAgQIECBQQkBALzEGRRAgQIAAAQIECBAgQIBAdwEBvfsG6J8AAQIECBAgQIAAAQIESggI6CXGoAgCBAgQIECAAAECBAgQ6C4goHffAP0TIECAAAECBAgQIECAQAkBAb3EGBRBgAABAgQIECBAgAABAt0FBPTuG6B/AgQIECBAgAABAgQIECghIKCXGIMiCBAgQIAAAQIECBAgQKC7gIDefQP0T4AAAQIECBAgQIAAAQIlBAT0EmNQBAECBAgQIECAAAECBAh0FxDQu2+A/gkQIECAAAECBAgQIECghICAXmIMiiBAgAABAgQIECBAgACB7gICevcN0D8BAgQIECBAgAABAgQIlBAQ0EuMQREECBAgQIAAAQIECBAg0F1AQO++AfonQIAAAQIECBAgQIAAgRICAnqJMSiCAAECBAgQIECAAAECBLoLCOjdN0D/BAgQIECAAAECBAgQIFBCQEAvMQZFECBAgAABAgQIECBAgEB3AQG9+wbonwABAgQIECBAgAABAgRKCAjoJcagCAIECBAgQIAAAQIECBDoLiCgd98A/RMgQIAAAQIECBAgQIBACQEBvcQYFEGAAAECBAgQIECAAAEC3QUE9O4boH8CBAgQIECAAAECBAgQKCEgoJcYgyIIECBAgAABAgQIECBAoLuAgN59A/RPgAABAgQIECBAgAABAiUEBPQSY1AEAQIECBAgQIAAAQIECHQXENC7b4D+CRAgQIAAAQIECBAgQKCEgIBeYgyKIECAAAECBAgQIECAAIHuAgJ69w3QPwECBAgQIECAAAECBAiUEBDQS4xBEQQIECBAgAABAgQIECDQXUBA774B+idAgAABAgQIECBAgACBEgICeokxKIIAAQIECBAgQIAAAQIEugsI6N03QP8ECBAgQIAAAQIECBAgUEJAQC8xBkUQIECAAAECBAgQIECAQHcBAb37BuifAAECBAgQIECAAAECBEoICOglxqAIAgQIECBAgAABAgQIEOguIKB33wD9EyBAgAABAgQIECBAgEAJAQG9xBgUQYAAAQIECBAgQIAAAQLdBQT07hugfwIECBAgQIAAAQIECBAoISCglxiDIggQIECAAAECBAgQIECgu4CA3n0D9E+AAAECBAgQIECAAAECJQQE9BJjUAQBAgQIECBAgAABAgQIdBcQ0LtvgP4JECBAgAABAgQIECBAoISAgF5iDIogQIAAAQIECBAgQIAAge4CAnr3DdA/AQIECBAgQIAAAQIECJQQENBLjEERBAgQIECAAAECBAgQINBdQEDvvgH6J0CAwBwI3HXXXeMFL3jBHFSqxCwBO5Al614CBAgQqCQgoFeahloIECBA4FECBw4cGBd87HPjOU/7tbH7g6ePo48+mlIzATvQbODaJUCAQGMBAb3x8LVOgACBeRB46KGHxp/++TfGk5//1vGTu/9unL3zmPGyl544D6WrcYME7MAGQbqGAAECBMoLCOjlR6RAAgQILIbALbfcMnbt2nXIZnbv3j3OO++8Q/7Z8nA2Hdj283vHs3/+1fG+s09bDJjGXezdu3ecf/7549xzzx0nn3zyYSXsQOMl0ToBAgSaCQjozQauXQIECFQSmEL7xRdfPK699tpx3HHHrSmgL4X0cWA88N3rxrnvfOV4xjOeUakltQQErrnmmnHllVeO66+/PhTQ7UAA2VECBAgQmCsBAX2uxqVYAgQILI7A7N3TM888c5xxxhlrfvd0+cEDP/y38apn/2C86Y07FwemSSfTX85MAf2+++4bl112WTigz5jsQJOF0SYBAgSaCAjoTQatTQIECFQTmMLZvffeOy666KKxY8eOdQX06UXbH943fv0//3bsPufQH5+v1rd6xtizZ8+49NJLl36sYfr0RPQj7isN7YCtIkCAAIFFERDQF2WS+iBAgMAcCUwBbQplq71zOrW08uePD93mL8b9d94w3vfm54wTXvTCOZLoV+r+/fvH5ZdfPk455ZSxc+fOdf0Muh3otzc6JkCAQBcBAb3LpPVJgACBQgI33njjuPnmm1d993ztAf2XzR31wD3jN8c/jXfu+t1C3SplucDy2T/wwAMbGNDtgE0jQIAAgfkXENDnf4Y6IECAwFwJLH8H9Ug/ez5ram3voP8/wfbx0Pj53Z8d57/39eMpT3nKXNkserGzj7ZfcsklS18KuN5vcV/NyQ6sJuTPCRAgQKCqgIBedTLqIkCAwIIKrAxpq7UZDeiz+x78738eb/ytfeN3XvPK1R7hzzdJYHr3fPq1aof6J/Kr9tZarh1Yq5RzBAgQIFBFQECvMgl1ECBAoInA9O3d0xeDXX311eOYY45Ztev1BvTp4u0HfjyedN9N44/ff+aqz3Fg8wWy3kFf3okd2Py5eiIBAgQIrF9AQF+/nVcSIECgvMCdd9457r777lJ1Tj97PtX09re/fTzucY9btbYDBw6Mr921Yzz1Rev7lvajxsPjp3d9bnzg9OeP5x3md62vWsQcH6i4AzPOffv2jU9/+tPj1FNPXfrI++H+sQNzvIBKJ0CAAIGQgIAe4nKYAAEC8yMwhZoLr/rquoNtVqe3funPlq5+2akfyXrEoe/dt2ccv+PWseutb9rc527h06ruwIxk/74fja99+pzx0lM/Mp513CvypRruQD6qJxAgQIDARgoI6Bup6S4CBAgUEngsHw0v1MaGlrL9Fz8fB//js2P3+393PP7xj9/QuyteZgcePZVuO1BxL9VEgAABAocXENBtB8oNBUUAABw3SURBVAECBBZUQDg7/GD/9wdfHaf/9rbxylecvKDT/2VbdsAOLPSCa44AAQILKCCgL+BQtUSAAAHhbPUd2P7QfeM37v/SOOe9Z6x+eE5PCOhHHlyHHZjT1VU2AQIE2goI6G1Hr3ECBBZdQDhbfcJHjYPjZ3f9zfjwO146jj322NVfMGcn7MDqA1v0HVhdwAkCBAgQqCQgoFeahloIECCwgQLC2doxH/7xHePlz/z+ePMbX7v2F83BSTuw9iEt6g6sXcBJAgQIEKggIKBXmIIaCBAgkCAgnAVQ7//OeNlT7x5vedPrAi+qf9QOBGa0oDsQEHCUAAECBAoICOgFhqAEAgQIZAgIZ6urTh9v/sl3/mqc87YXj+c+97mrv2DOTtiB1Qe26DuwuoATBAgQIFBJQECvNA21ECBAYAMFhLMjYx594IfjSffdNP7o/bs2UL3WVXbADtTaSNUQIECAwGoCAvpqQv6cAAECcyognB1+cPvv+YfxphMeGq99zavmdLprK9sO2IG1bYpTBAgQIFBFQECvMgl1ECBAYIMFhLNHg24fD44Hv/sX44I/ePN48pOfvMHi9a6zA3ag3laqiAABAgSOJCCg2w8CBAgsqMAUzi686qvjaSe8Y0E7jLV11M++N47b9q/j93a9JfbCOT5tB351eB13YI7XV+kECBBoKSCgtxy7pgkQ6CJw2223jT179sx1uwcPHhz/+L0njqe+aH0/K37UeHjsveO68f7TnjdeePzxc22xnuLtwBjdd2A9e+M1BAgQILA1AgL61rh7KgECBAisUeCxfEz76IP3jx3/9blx/jk+RbBG7pLH7EDJsSiKAAECBBIEBPQEVFcSIECAwMYJrDecPXTvv4ydz907Xv+612xcMW7aEgE7sCXsHkqAAAECWyAgoG8BukcSIECAwNoFouFs+3hoPHDnX45zf3/nePrTn772BzlZVsAOlB2NwggQIEBggwUE9A0GdR0BAgQIbKxAJJxt23/POPbBr433nP3WjS3CbVsqYAe2lN/DCRAgQGATBQT0TcT2KAIECBCIC6wtnP1i3H/nDeNdb3jWeOlLTow/xCtKC9iB0uNRHAECBAhsoICAvoGYriJAgACBjRdYLZwd/fC+sf0Hfz3+5A/fMbZt27bxBbhxywXswJaPQAEECBAgsEkCAvomQXsMAQIECKxP4Ejh7OG9t42TnrZnvOXNb1jf5V41FwJ2YC7GpEgCBAgQ2AABAX0DEF1BgAABAnkChwpn28aBse/fPzs+fNYp49hjj817uJtLCNiBEmNQBAECBAhsgoCAvgnIHkGAAAEC6xdYGc62P/g/4+k//dL4wHvetv5LvXKuBOzAXI1LsQQIECDwGAQE9MeA56UECBAgkC+wPJzt+97fj7e98vHj5aeclP9gTygjYAfKjEIhBAgQIJAsIKAnA7ueAAECBB6bwBTOLvjY58azj9k2dn/w9LFjx47HdqFXz52AHZi7kSmYAAECBNYpIKCvE87LCBAgQGDzBG6//fZxwgknbN4DPamcgB0oNxIFESBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlEBAT0q5jwBAgQIECBAgAABAgQIEEgQENATUF1JgAABAgQIECBAgAABAgSiAgJ6VMx5AgQIECBAgAABAgQIECCQICCgJ6C6kgABAgQIECBAgAABAgQIRAUE9KiY8wQIECBAgAABAgQIECBAIEFAQE9AdSUBAgQIECBAgAABAgQIEIgKCOhRMecJECBAgAABAgQIECBAgECCgICegOpKAgQIECBAgAABAgQIECAQFRDQo2LOEyBAgAABAgQIECBAgACBBAEBPQHVlQQIECBAgAABAgQIECBAICogoEfFnCdAgAABAgQIECBAgAABAgkCAnoCqisJECBAgAABAgQIECBAgEBUQECPijlPgAABAgQIECBAgAABAgQSBAT0BFRXEiBAgAABAgQIECBAgACBqICAHhVzngABAgQIECBAgAABAgQIJAgI6AmoriRAgAABAgQIECBAgAABAlGB/wNT+v7T8tvSsQAAAABJRU5ErkJggg==",
    __v: 0,
    rules: [
      {
        actions: [
          {
            newValue: "red",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        ruleType: "oneToOne",
        eventType: "hover",
        shapeId: 5
      },
      {
        actions: [
          {
            newValue: "yellow",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        ruleType: "oneToOne",
        eventType: "hover",
        shapeId: 6
      },
      {
        applyToPartner: true,
        actions: [
          {
            newValue: "red",
            actionPropertyName: "fillColour"
          },
          {
            newValue: 0.1,
            actionPropertyName: "linewidth"
          }
        ],
        logicalOperators: [],
        conditions: [],
        selfLogicalOperators: [],
        selfConditions: [
          {
            comparisonValue: "red",
            operator: "===",
            propertyName: "fillColour"
          }
        ],
        ruleType: "manyToOne",
        eventType: "collision"
      }
    ],
    throwArray: [],
    shapes: [
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 0,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 0,
            x: 36
          },
          location: {
            y: -297,
            x: 0.5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 297,
          x: -19
        },
        boundingRect: {
          radius: 300.53951487283666,
          vertices: [
            {
              y: -297,
              x: -17.5
            },
            {
              y: -297,
              x: 18.5
            },
            {
              y: 303,
              x: 18.5
            },
            {
              y: 303,
              x: -17.5
            }
          ],
          centre: {
            y: 3,
            x: 0.5
          },
          maxY: 303,
          minY: -297,
          maxX: 18.5,
          minX: -17.5
        },
        vertices: [
          {
            y: -297,
            x: -17.5
          },
          {
            y: -297,
            x: 18.5
          },
          {
            y: 303,
            x: 18.5
          },
          {
            y: 303,
            x: -17.5
          }
        ],
        centreOfMass: {
          y: 297,
          x: -19
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 1,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 36,
            z: 0,
            y: 0,
            x: 36
          },
          location: {
            y: -297,
            x: 0.5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 297,
          x: 1018
        },
        boundingRect: {
          radius: 300.53951487283666,
          vertices: [
            {
              y: -297,
              x: -17.5
            },
            {
              y: -297,
              x: 18.5
            },
            {
              y: 303,
              x: 18.5
            },
            {
              y: 303,
              x: -17.5
            }
          ],
          centre: {
            y: 3,
            x: 0.5
          },
          maxY: 303,
          minY: -297,
          maxX: 18.5,
          minX: -17.5
        },
        vertices: [
          {
            y: -297,
            x: -17.5
          },
          {
            y: -297,
            x: 18.5
          },
          {
            y: 303,
            x: 18.5
          },
          {
            y: 303,
            x: -17.5
          }
        ],
        centreOfMass: {
          y: 297,
          x: 1018
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 2,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 1000,
            z: 0,
            y: 0,
            x: 1000
          },
          location: {
            y: -17.5,
            x: 5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: 619,
          x: 500
        },
        boundingRect: {
          radius: 500.3238950919694,
          vertices: [
            {
              y: -17.5,
              x: -495
            },
            {
              y: -17.5,
              x: 505
            },
            {
              y: 18.5,
              x: 505
            },
            {
              y: 18.5,
              x: -495
            }
          ],
          centre: {
            y: 0.5,
            x: 5
          },
          maxY: 18.5,
          minY: -17.5,
          maxX: 505,
          minX: -495
        },
        vertices: [
          {
            y: -17.5,
            x: -495
          },
          {
            y: -17.5,
            x: 505
          },
          {
            y: 18.5,
            x: 505
          },
          {
            y: 18.5,
            x: -495
          }
        ],
        centreOfMass: {
          y: 619,
          x: 500
        }
      },
      {
        events: {
          subscribed: false
        },
        type: "fixed",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 3,
        fillColour: "transparent",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: -1,
            x: -6.123233995736766e-17
          },
          sideVector: {
            magnitude: 1000,
            z: 0,
            y: 0,
            x: 1000
          },
          location: {
            y: -17.5,
            x: 5
          }
        },
        physics: {
          momentOfInertia: null,
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0
          },
          momentOfInertiaCOM: null,
          mass: null,
          density: 1
        },
        centreOfRotation: {
          y: -20,
          x: 500
        },
        boundingRect: {
          radius: 500.3238950919694,
          vertices: [
            {
              y: -17.5,
              x: -495
            },
            {
              y: -17.5,
              x: 505
            },
            {
              y: 18.5,
              x: 505
            },
            {
              y: 18.5,
              x: -495
            }
          ],
          centre: {
            y: 0.5,
            x: 5
          },
          maxY: 18.5,
          minY: -17.5,
          maxX: 505,
          minX: -495
        },
        vertices: [
          {
            y: -17.5,
            x: -495
          },
          {
            y: -17.5,
            x: 505
          },
          {
            y: 18.5,
            x: 505
          },
          {
            y: 18.5,
            x: -495
          }
        ],
        centreOfMass: {
          y: -20,
          x: 500
        }
      },
      {
        events: {
          subscribed: true
        },
        type: "",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 4,
        fillColour: "#6495ED",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: 6.123233995736766e-17,
            x: -1
          },
          sideVector: {
            magnitude: 12,
            z: 0,
            y: -12,
            x: 0
          },
          location: {
            y: -11.983899821109123,
            x: 11.476744186046513
          }
        },
        physics: {
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: -0.4
          },
          momentOfInertiaCOM: 492952.60554561735,
          mass: 1118,
          density: 1
        },
        centreOfRotation: {
          y: 300,
          x: 544.9999999999999
        },
        boundingRect: {
          radius: 41.59627387158614,
          vertices: [
            {
              y: -17.983899821109123,
              x: -38.52325581395348
            },
            {
              y: -17.983899821109123,
              x: 36.47674418604652
            },
            {
              y: 18.016100178890877,
              x: 36.47674418604652
            },
            {
              y: 18.016100178890877,
              x: -38.52325581395348
            }
          ],
          centre: {
            y: 0.016100178890877004,
            x: -1.023255813953483
          },
          maxY: 18.016100178890877,
          minY: -17.983899821109123,
          maxX: 36.47674418604652,
          minX: -38.52325581395348
        },
        vertices: [
          {
            y: -5.983899821109123,
            x: 11.476744186046513
          },
          {
            y: -17.983899821109123,
            x: 11.476744186046513
          },
          {
            y: 0.016100178890876567,
            x: 36.47674418604652
          },
          {
            y: 18.016100178890877,
            x: 11.476744186046513
          },
          {
            y: 6.016100178890877,
            x: 11.476744186046513
          },
          {
            y: 6.016100178890877,
            x: -38.52325581395348
          },
          {
            y: -5.983899821109123,
            x: -38.52325581395348
          }
        ],
        centreOfMass: {
          y: 300,
          x: 544.9999999999999
        }
      },
      {
        events: {
          subscribed: true
        },
        type: "",
        touchPoint: [],
        selected: false,
        onShape: false,
        linewidth: 0.7,
        strokeStyle: "black",
        id: 7,
        fillColour: "#6495ED",
        dragging: false,
        colliding: false,
        referenceVectors: {
          unitNormal: {
            y: 6.123233995736766e-17,
            x: -1
          },
          sideVector: {
            magnitude: 12,
            z: 0,
            y: -12,
            x: 0
          },
          location: {
            y: -11.983899821109123,
            x: 11.476744186046513
          }
        },
        physics: {
          torque: 0,
          forcesCOM: [
            {
              y: 0,
              x: 0
            }
          ],
          angularAcceleration: 0,
          angularVelocity: 0,
          acceleration: {
            y: 0,
            x: 0
          },
          velocity: {
            y: 0,
            x: 0.4
          },
          momentOfInertiaCOM: 492952.60554561735,
          mass: 1118,
          density: 1
        },
        centreOfRotation: {
          y: 300,
          x: 415.99999999999983
        },
        boundingRect: {
          radius: 41.59627387158614,
          vertices: [
            {
              y: -17.983899821109123,
              x: -38.52325581395348
            },
            {
              y: -17.983899821109123,
              x: 36.47674418604652
            },
            {
              y: 18.016100178890877,
              x: 36.47674418604652
            },
            {
              y: 18.016100178890877,
              x: -38.52325581395348
            }
          ],
          centre: {
            y: 0.016100178890877004,
            x: -1.023255813953483
          },
          maxY: 18.016100178890877,
          minY: -17.983899821109123,
          maxX: 36.47674418604652,
          minX: -38.52325581395348
        },
        vertices: [
          {
            y: -5.983899821109123,
            x: 11.476744186046513
          },
          {
            y: -17.983899821109123,
            x: 11.476744186046513
          },
          {
            y: 0.016100178890876567,
            x: 36.47674418604652
          },
          {
            y: 18.016100178890877,
            x: 11.476744186046513
          },
          {
            y: 6.016100178890877,
            x: 11.476744186046513
          },
          {
            y: 6.016100178890877,
            x: -38.52325581395348
          },
          {
            y: -5.983899821109123,
            x: -38.52325581395348
          }
        ],
        centreOfMass: {
          y: 300,
          x: 415.99999999999983
        }
      }
    ]
  },
  {
    _id: "5f75ca221aa7ec01d9e629d1",
    name: "Step 31",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 28,
      y: 298
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3db6itV33g8eWfibf1Cip0bjTWwCTaKKMSNDR5ZfFFatsRlCrXmdg20qJvRtE01EYa/xZLII2izItKC4UgYk3RmgG1Y6VpWpsQU0cSxcFkiFRt0paovVLTNNFhH9xnTnbOydnPXms9z1rr9wn0hbrXetb6/B4LX/e55z7unnvu+VHyDwECBAgQIECAAAECBAgQILCowOME+qL+Hk6AAAECBAgQIECAAAECBPYEBLoXgQABAgQIECBAgAABAgQINCAg0BsYgiMQIECAAAECBAgQIECAAAGB7h0gQIAAAQIECBAgQIAAAQINCAj0BobgCAQIECBAgAABAgQIECBAQKB7BwgQIECAAAECBAgQIECAQAMCAr2BITgCAQIECBAgQIAAAQIECBAQ6N4BAgQIECBAgAABAgQIECDQgEDVQL/77rvTm970pvTVr35176qXXXZZuvrqq9OJEyf2r/7BD34wXXfddXv/+qUvfWn6wAc+kJ72tKfNRvPJT34yveUtb9l/3ur5r3zlK/f/9Xe+8529//ymm27a+/euuOKK9OY3v/kR5/viF7+YXv3qV+//ezfccEN6yUteMtsdPIgAAQIECBAgQIAAAQI5Auedd156+OGH97e45ppr0unTp3O2XGRt7/eoFujrOH/Pe96zH6urGL/vvvv2I30Vx5/4xCf2o3zzP6890c3nr2P8Va961V6kr//1i1/84v0oX51x9c860jfvuYr1d7zjHelDH/pQWr0c/iFAgAABAgQIECBAgEDLAi960YvS9773vbSO8nXkfupTn0ovfOELWz76I842wj2qBfoqfm+77bZHfGO+itl3v/vd6Z3vfGc655xz0nvf+9500UUX7X9jvQ7i1bfutb+BfuCBBx71/NV0D577zjvv3Avtg9/qr864CvDVt+qrF/ewe25GfDdvtIMSIECAAAECBAgQIBBK4GMf+1h629vell7wghekG2+8ce/uh/17raOMco+tA339o+AHf3x7FaK33377XsDef//9+/F91DfHNQN9HdynTp16xI+gH4zl1bfbm8G9+aIdDO7PfOYzj/ofGdbPWX3LvvofEQR66/9VdT4CBAgQIECAAAECBI4SeOtb37r3U82rvnn/+9+//7FV0508eTJ9+ctf7gJvlHtsHeirqRwM8lVsT/1R7s0fKT/uX099E476kfVtv5HfjPzDgn7zx+A3f8T9sB/tn3oPnydAgAABAgQIECBAgMAcAq94xSvSHXfcsf/j7etnrr90XfVND/+Mco9Jgb6O0wsuuCDdfPPN6Q1veMMjfqHaYw1u/YvUNn+B2sFf0nbYL5Gb8jIc9ufBj/vG/OD+B/8HiNUvqjvsz6Cvz3vwl8kd/GV4z3/+8/358ylD81kCBAgQIECAAAECBBYTGCVsR7nHpEBfvTXr0J4S0+s1B6P2sB9JPyrit31bN/ec8mfBV59d/Uj75i932/wt7u973/vSV77ylf0/O3/Ut/YHf7Hctuf3OQIECBAgQIAAAQIECMwpMErYjnKPyYG+/gZ5278S7bA4X4f+Yd9uT4nqw17c9Y+lr34R3eoX0m3z4+1Hxflh+x/8RXarH/tY/bK4zWds82fd5/wvnWcRIECAAAECBAgQIEDgMIFR/uz2KPeYFOjrH+V+3etet/ct8uYvZNsc+GN9I35UxOYG+vq3rF9yySXps5/97LF/r/rmj7UfvMPBX2q3/jMYB8+9+qxA9//oCBAgQIAAAQIECBDoVWCU334+yj22DvTNHx8/7pehHfef1/gR9/V/KVbRfd1116UrrrjiEb/RffO/NJs/nr75n2+ecfMXxK0+70fce/1/Rc5NgAABAgQIECBAgMBKYIS/P3yUe2wd6Id907yK0w9/+MN7f2579c/67zhffdu8juTDXvn1L4pbB/BHPvKRvY9t/oK1XX9U/Khv7g/79vumm2561BEP/vj+5p9BP/jn6NcLD/6iu9W/d9hn/FefAAECBAgQIECAAAECrQqsGu7hhx/eP94111yTTp8+3epxjzxX7/fYOtCXmsxHP/rR9PKXvzytfqv6tv/sGvbb7u9zBAgQIECAAAECBAgQIECgtEDTgb769vr666/f++vcTpw4sfXdV9/eP/vZz976r4DbemMfJECAAAECBAgQIECAAAEClQSaDvTVn2Nf/d+ll1661fXXf+79wgsvTFdfffWkqN/qAT5EgAABAgQIECBAgAABAgQqCTQd6JXubFsCBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgRp+7OBAgQIECAAAECBAgQINCcgEBvbiQORIAAAQIECBAgQIAAAQIRBQR6xKm7MwECBAgQIECAAAECBAg0JyDQmxuJAxEgQIAAAQIECBAgQIBARAGBHnHq7kyAAAECBAgQIECAAAECzQkI9OZG4kAECBAgQIAAAQIECBAgEFFAoEecujsTIECAAAECBAgQIECAQHMCAr25kTgQAQIECBAgQIAAAQIECEQUEOgR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IECAAAECBAgQIECAAIECAgK9AKItCBAgQIAAAQIECBAgQIBAroBAzxW0ngABAgQIECBAgAABAgQIFBAQ6AUQbUGAAAECBAgQIECAAAECBHIFBHquoPUECBAgQIAAAQIECBAgQKCAgEAvgGgLAgQIECBAgAABAgQIECCQKyDQcwWtJ0CAAAECBAgQIECAAAECBQQEegFEWxAgQIAAAQIECBAgQIAAgVwBgZ4raD0BAgQIECBAgAABAgQIECggINALINqCAAECBAgQIECAAAECBAjkCgj0XEHrCRAgQIAAAQIECBAgQIBAAQGBXgDRFgQIECBAgAABAgQIECBAIFdAoOcKWk+AAAECBAgQIECAAAECBAoICPQCiLYgQIAAAQIECBAgQIAAAQK5AgI9V9B6AgQIECBAgAABAgQIECBQQECgF0C0BQECBAgQIECAAAECBAgQyBUQ6LmC1hMgQIAAAQIECBAgQIAAgQICAr0Aoi0IECBAgAABAgQIECBAgECugEDPFbSeAAECBAgQIECAAAECBAgUEBDoBRBtQYAAAQIECBAgQIAAAQIEcgUEeq6g9QQIECBAgAABAgQIECBAoICAQC+AaAsCBAgQIECAAAECBAgQIJArINBzBa0nQIAAAQIECBAgQIAAAQIFBAR6AURbECBAgAABAgQIECBAgACBXAGBnitoPQECBAgQIECAAAECBAgQKCAg0Asg2oIAAQIECBAgQIAAAQIECOQKCPRcQesJECBAgAABAgQIECBAgEABAYFeANEWBAgQIECAAAECBAgQIEAgV0Cg5wpaT4AAAQIECBAgQIAAAQIECggI9AKItiBAgAABAgQIECBAgAABArkCAj1X0HoCBAgQIECAAAECBAgQIFBAQKAXQLQFAQIECBAgQIAAAQIECBDIFRDouYLWEyBAgAABAgQIECBAgACBAgICvQCiLQgQIECAAAECBAgQIECAQK6AQM8VtJ4AAQIECBAgQIAAAQIECBQQEOgFEG1BgAABAgQIECBAgAABAgRyBQR6rqD1BAgQIECAAAECBAgQIECggIBAL4BoCwIECBAgQIAAAQIECBAgkCsg0HMFrSdAgAABAgQIECBAgAABAgUEBHoBRFsQIECAAAECBAgQIECAAIFcAYGeK2g9AQIECBAgQIAAAQIECBAoICDQCyDaggABAgQIECBAgAABAgQI5AoI9FxB6wkQIECAAAECBAgQIECAQAEBgV4A0RYECBAgQIAAAQIECBAgQCBXQKDnClpPgAABAgQIECBAgAABAgQKCAj0Aoi2IECAAAECBAgQIECAAAECuQICPVfQegIECBAgQIAAAQIECBAgUEBAoBdAtAUBAgQIECBAgAABAgQIEMgVEOi5gtYTIECAAAECBAgQIECAAIECAgK9AKItCBAgQIAAAQIECBAgQIBAroBAzxW0ngABAgQIECBAgAABAgQIFBAQ6AUQbUGAAAECBAgQIECAAAECBHIFBHquoPUECBAgQIAAAQIECBAgQKCAgEAvgGgLAgQIECBAgAABAgQIECCQKyDQcwWtJ0CAAAECBAgQIECAAAECBQQEegFEWxAgQIAAAQIECBAgQIAAgVwBgZ4raD0BAgQIECBAgAABAgQIECggINALINqCAAECBAgQIECAAAECBAjkCgj0XEHrCRAgQIAAAQIECBAgQIBAAQGBXgDRFgQIECBAgAABAgQIECBAIFdAoOcKWk+AAAECBAgQIECAAAECBAoICPQCiLYgQIAAAQIECBAgQIAAAQK5AgI9V9B6AgQIECBAgAABAgQIECBQQECgF0C0BQECBAgQIECAAAECBAgQyBUQ6LmC1hMgQIAAAQIECBAgQIAAgQICAr0Aoi0IECBAgAABAgQIECBAgECugEDPFbSeAAECBAgQIECAAAECBAgUEBDoBRBtQYAAAQIECBAgQIAAAQIEcgUEeq6g9QQIECBAgAABAgQIECBAoICAQC+AaAsCBAgQIECAAAECBAgQIJArINBzBa0nQIAAAQIECBAgQIAAAQIFBAR6AURbECBAgAABAgQIECBAgACBXAGBnitoPQECBAgQIECAAAECBAgQKCAg0Asg2oIAAQIECBAgQIAAAQIECOQKCPRcQesJECBAgAABAgQIECBAgEABAYFeANEWBAgQIECAAAECBAgQIEAgV0Cg5wpaT4AAAQIECBAgQIAAAQIECggI9AKItiBAgAABAgQIECBAgAABArkCAj1X0HoCBAgQIECAAAECBAgQIFBAQKAXQLQFAQIECBAgQIAAAQIECBDIFRDouYLWEyBAgAABAgQIECBAgACBAgICvQCiLQgQIECAAAECBAgQIECAQK6AQM8VtJ4AAQIECBAgQIAAAQIECBQQEOgFEG1BgAABAgQIECBAgAABAgRyBQR6rqD1BAgQIECAAAECBAgQIECggIBAL4BoCwIECBAgQIAAAQIECBAgkCsg0HMFrSdAgAABAgQIECBAgAABAgUEBHoBRFsQIECAAAECBAgQIECAAIFcAYGeK2g9AQIECBAgQIAAAQIECBAoICDQCyDaggABAgQIECBAgAABAgQI5AoI9FxB6wkQIECAAAECBAgQIECAQAEBgV4A0RYECBAgQIAAAQIECBAgQCBXQKDnClpPgAABAgQIECBAgAABAgQKCAj0Aoi2IECAAAECBAgQIECAAAECuQICPVfQegIECBAgQIAAAQIECBAgUEBAoBdAtAUBAgQIECBAgAABAgQIEMgVEOi5gtYTIECAAAECBAgQIECAAIECAgK9AKItCBAgQIAAAQIECBAgQIBAroBAzxW0ngABAgQIECBAgAABAgQIFBAQ6AUQbUGAAAECBAgQIECAAAECBHIFBHquoPUECBAgQIAAAQIECBAgQKCAgEAvgGgLAgQIECBAgAABAgQIECCQKyDQcwWtJ0CAAAECBAgQIECAAAECBQQEegFEWxAgQIAAAQIECBAgQIAAgVwBgZ4raD0BAgQIECBAgAABAgQIECggINALINqCAAECBAgQIECAAAECBAjkCgj0XEHrCRAgQIAAAQIECBAgQIBAAQGBXgDRFgQIECBAgAABAgQIECBAIFdAoOcKWk+AAAECBAgQIECAAAECBAoICPQCiLYgQIAAAQIECBAgQIAAAQK5AgI9V9B6AgQIECBAgAABAgQIECBQQECgF0C0BQECBAgQIECAAAECBAgQyBUQ6LmC1hMgQIAAAQIECBAgQIAAgQICAr0Aoi0IECBAgAABAgQIECBAgECugEDPFbSeAAECBAgQIECAAAECBAgUEBDoBRBtQYAAAQIECBAgQIAAAQIEcgUEeq6g9QQIECBAgAABAgQIECBAoICAQC+AaAsCBAgQIECAAAECBAgQIJArINBzBa0nQIAAAQIECBAgQIAAAQIFBAR6AURbECBAgAABAgQIECBAgACBXAGBnitoPQECBAgQIECAAAECBAgQKCAg0Asg2oIAAQIECBAgQIAAAQIECOQKCPRcQesJECBAgAABAgQIECBAgEABAYFeANEWBAgQIECAAAECBAgQIEAgV0Cg5wpaT4AAAQIECBAgQIAAAQIECggI9AKItiBAgAABAgQIECBAgAABArkCAj1X0HoCBAgQIECAAAECBAgQIFBAQKAXQLQFAQIECBAgQIAAAQIECBDIFRDouYLWEyBAgAABAgQIECBAgACBAgICvQCiLQgQIECAAAECBAgQIECAQK6AQM8VtJ4AAQIECBAgQIAAAQIECBQQEOgFEG1BgAABAgQIECBAgAABAgRyBQR6rqD1BAgQIECAAAECBAgQIECggIBAL4BoCwIECBAgQIAAAQIECBAgkCsg0HMFrSdAgAABAgQIECBAgAABAgUEBHoBRFsQIECAAAECBAgQIECAAIFcAYGeK2g9AQIECBAgQIAAAQIECBAoICDQCyDaggABAgQIECBAgAABAgQI5AoI9FxB6wkQIECAAAECBAgQIECAQAEBgV4A0RYECBAgQIAAAQIECBAgQCBXQKDnClpPgAABAgQIECBAgAABAgQKCAj0Aoi2IECAAAECBAgQIECAAAECuQICPVfQegIECBAgQIAAAQIECBAgUEBAoBdAtAUBAgQIECBAgAABAgQIEMgVEOi5gtYTIECAAAECBAgQIECAAIECAgK9AKItCBAgQIAAAQIECBAgQIBAroBAzxW0ngABAgQIECBAgAABAgQIFBAQ6AUQbUGAAAECBAgQIECAAAECBHIFBHquoPUECBAgQIAAAQIECBAgQKCAgEAvgGgLAgQIECBAgAABAgQIECCQKyDQcwWtJ0CAAAECBAgQIECAAAECBQQEegFEWxAgQIAAAQIECBAgQIAAgVwBgZ4raD0BAgQIECBAgAABAgQIECggINALINqCAAECBAgQIECAAAECBAjkCgj0XEHrCRAgQIAAAQIECBAgQIBAAQGBXgDRFgQIECBAgAABAgQIECBAIFdAoOcKWk+AAAECBAgQIECAAAECBAoICPQCiLYgQIAAAQIECBAgQIAAAQK5AgI9V9B6AgQIECBAgAABAgQIECBQQECgF0C0BQECBAgQIECAAAECBAgQyBUQ6LmC1hMgQIAAAQIECBAgQIAAgQICAr0Aoi0IECBAgAABAgQIECBAgECugEDPFbSeAAECBAgQIECAAAECBAgUEBDoBRBtQYAAAQIECBAgQIAAAQIEcgUEeq6g9QQIECBAgAABAgQIECBAoICAQC+AaAsCBAgQIECAAAECBAgQIJArINBzBa0nQIAAAQIECBAgQIAAAQIFBAR6AURbECBAgAABAgQIECBAgACBXAGBnitoPQECBAgQIECAAAECBAgQKCAg0Asg2oIAAQIECBAgQIAAAQIECOQKCPRcQesJECBAgAABAgQIECBAgEABAYFeANEWBAgQIECAAAECBAgQIEAgV0Cg5wpaT4AAAQIECBAgQIAAAQIECggI9AKItiBAgAABAgQIECBAgAABArkCAj1X0HoCBAgQIECAAAECBAgQIFBAQKAXQLQFAQIECBAgQIAAAQIECBDIFRDouYLWEyBAgAABAgQIECBAgACBAgICvQCibSIxogAAAjZJREFULQgQIECAAAECBAgQIECAQK6AQM8VtJ4AAQIECBAgQIAAAQIECBQQEOgFEG1BgAABAgQIECBAgAABAgRyBQR6rqD1BAgQIECAAAECBAgQIECggIBAL4BoCwIECBAgQIAAAQIECBAgkCsg0HMFrSdAgAABAgQIECBAgAABAgUEBHoBRFsQIECAAAECBAgQIECAAIFcAYGeK2g9AQIECBAgQIAAAQIECBAoICDQCyDaggABAgQIECBAgAABAgQI5AoI9FxB6wkQIECAAAECBAgQIECAQAEBgV4A0RYECBAgQIAAAQIECBAgQCBXQKDnClpPgAABAgQIECBAgAABAgQKCAj0Aoi2IECAAAECBAgQIECAAAECuQICPVfQegIECBAgQIAAAQIECBAgUEBAoBdAtAUBAgQIECBAgAABAgQIEMgVEOi5gtYTIECAAAECBAgQIECAAIECAgK9AKItCBAgQIAAAQIECBAgQIBAroBAzxW0ngABAgQIECBAgAABAgQIFBAQ6AUQbUGAAAECBAgQIECAAAECBHIFBHquoPUECBAgQIAAAQIECBAgQKCAgEAvgGgLAgQIECBAgAABAgQIECCQKyDQcwWtJ0CAAAECBAgQIECAAAECBQQEegFEWxAgQIAAAQIECBAgQIAAgVwBgZ4raD0BAgQIECBAgAABAgQIECggINALINqCAAECBAgQIECAAAECBAjkCgj0XEHrCRAgQIAAAQIECBAgQIBAAYH/B3MGwXjg9x8OAAAAAElFTkSuQmCC",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 591.2132034355964,
          y: 273.2132034355964
        },
        centreOfRotation: {
          x: 600,
          y: 252
        },
        vertices: [
          {
            x: 75.66042558696057,
            y: -100.40916292848975,
            z: 0,
            magnitude: 125.72390385284733
          },
          {
            x: 101.11626970967629,
            y: -74.95331880577405,
            z: 0,
            magnitude: 125.86699329053666
          },
          {
            x: -77.07463914933366,
            y: 103.23759005323595,
            z: 0,
            magnitude: 128.8351660068011
          },
          {
            x: -102.53048327204938,
            y: 77.78174593052023,
            z: 0,
            magnitude: 128.6953767623375
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: -1.2,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 88.38834764831843,
            y: -87.68124086713189,
            z: 0,
            magnitude: 124.5010040120159
          },
          sideVector: {
            x: 25.455844122715714,
            y: 25.45584412271571,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: 0.7071067811865475,
            y: -0.7071067811865476,
            z: 0,
            magnitude: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 300,
          y: 252
        },
        centreOfRotation: {
          x: 300,
          y: 252
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      }
    ]
  },
  {
    _id: "5f79a3760c60d80559fb872f",
    name: "A flock of arrows",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 0,
      y: 595
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3dX4zc1Xk38Mdrt91SQjH/HFGnanCgYLcJFDshFakRQcKEN2DIopbQJKhOiprWyLjNxavWIOCCm4ogUKW+USNFaqBNggOKolK1QqVKqqY1CLUIgh0vQQi1dUVinDi1sdf2q9+icZdld2fOnHNmfzP72TvYc55zzuc8vvjO/GZ22csvv3wi/BAgQIAAAQIECBAgQIAAAQKLKrBMQF9Uf4sTIECAAAECBAgQIECAAIFpAQFdIxAgQIAAAQIECBAgQIAAgRYICOgtuARbIECAAAECBAgQIECAAAECAroeIECAAAECBAgQIECAAAECLRAQ0FtwCbZAgAABAgQIECBAgAABAgQEdD1AgAABAgQIECBAgAABAgRaICCgt+ASbIEAAQIECBAgQIAAAQIECAjoeoAAAQIECBAgQIAAAQIECLRAoGpAP3z4cNx7773x8MMPTx/1lltuiR07dsT4+PhAjj57/c6iDzzwQGzevHn6P59++umYmJg4uZ9HH3001q9ff/K/Z/+++cXGjRujqbFy5cqBnMMiBAgQIECAAAECBAgQqCnwS7/0S28pv2XLlunsNmw/w36OqgH9wQcfjH379p282Casr1q1Km6//faB3PP+/ftj27ZtsXXr1reE7s7infDdCeVzjX/88cdj165dA31hYSA4FiFAgAABAgQIECBAgEBEvPvd744TJ05EJ5R3Qu6f//mfx6ZNm4bGaBTOUS2gT05Oxt133x133XVXrFmzZvpS5/p/NW+723rNCwjNz8wXDJrQ/thjj50M5HONqblntQkQIECAAAECBAgQIDAogeZN1C9+8Yvx8z//8/Fv//Zv08vO9f8GtZ9+1xmVc/Qc0Jt3kpt3o2c+At6E12eeeWb6ce8f/vCHbwnkTdB96KGH3vIoeOeR8xtuuGHOd7QXuowmbDfvhN9zzz0n585+x3t2mJ5rD501OnvZsGHDycfdOy8iNOdp1vnZn/3Z6eacPabfpjGPAAECBAgQIECAAAECbRJo3iF/8cUX48ILL4y//du/Pbm15l30ZcuWxfe///02bXfevYzKOXoO6I3EzEDeBOY777xzOoR33iGfqTXXo+HzheJebrwzd+Yj8gsF8KZm50WFmfVnfv58vnfQO+c644wzpl+U+Md//MeTJXz+vJfbMoYAAQIECBAgQIAAgWEQeN/73hcHDhw4+Xh7Z8+dx9xffvnlYThGjMo5kgJ65x3r5tWVb33rW/G7v/u7b3n3uWZA7wTu5vHzzhe0dXv8fOYLCs0XunX237yD33xJ3OzPoHdeBHj22WenX3hofpp37Weeswn9M/cwFN1qkwQIECBAgAABAgQIEJhDYFSC7aicIymgN/fZCbXdvpG99DvozdozH3Nv3rVf6Avg5vvXNztgz/yW9rVr107X/PKXv/yWz87PrDU75PtXToAAAQIECBAgQIAAgWEVGJVgOyrnSA7oncfGuz3qXfoz6J2G77xr/uu//utv+4x7L/8ouj0W3+33OY/p97I/YwgQIECAAAECBAgQIDAogVH57PaonCMpoHfewf7t3/7teP755xf8k2m1vsW98y3rp556avzcz/3cvH+ybb4gPfOd/eZLEGb/CbWZj83PFda7/em2Qf1Dsg4BAgQIECBAgAABAgRyBUbl289H5Rw9B/TZX9I217eqz26OGn8HvROQmy9um/mN8nM15uzH2WfvefZ/N4F85hffzfU4+8wzjY+P5/57MJ8AAQIECBAgQIAAAQKLKjAKfz+8ARyFc/Qc0Gd/4VoD0ATgL3zhCye/UG323z3vhPqHH354uuFmf26925e8zdelc+2lGTtXvdnf5D471M/+DPrsb6Wf+YLAXGdY1H9JFidAgAABAgQIECBAgEABgc63tndKbdmyJXbs2FGg8mBLDPs5eg7oNVib8Ns8Zn7zzTcnle832CctYjABAgQIECBAgAABAgQIEBigwKIG9Obd61dffXXeP9U2l0MT6pvH0JtvW5/r768P0M5SBAgQIECAAAECBAgQIECgmMCiBvS/+7u/mw7ZvQbtzuPqzd9Bb/6OuR8CBAgQIECAAAECBAgQIDAqAosa0EcF0TkIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+AQIECBAgQIAAAQIECBAoICCgF0BUggABAgQIECBAgAABAgQI5AoI6LmC5hMgQIAAAQIECBAgQIAAgQICAnoBRCUIECBAgAABAgQIECBAgECugICeK2g+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AAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQ/UtGaAAAB/RJREFUIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqoCAnipmPAECBAgQIECAAAECBAgQqCAgoFdAVZIAAQIECBAgQIAAAQIECKQKCOipYsYTIECAAAECBAgQIECAAIEKAgJ6BVQlCRAgQIAAAQIECBAgQIBAqsD/B2dtM0u60DMzAAAAAElFTkSuQmCC",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 544.9999999999999,
          y: 300
        },
        centreOfRotation: {
          x: 544.9999999999999,
          y: 300
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: -0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 544.9999999999999,
          y: 350
        },
        centreOfRotation: {
          x: 544.9999999999999,
          y: 350
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: -0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 544.9999999999999,
          y: 400
        },
        centreOfRotation: {
          x: 544.9999999999999,
          y: 400
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: -0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 6
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 415.9999999999999,
          y: 300
        },
        centreOfRotation: {
          x: 415.9999999999999,
          y: 300
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: 0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 7
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 415.9999999999999,
          y: 350
        },
        centreOfRotation: {
          x: 415.9999999999999,
          y: 350
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: 0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 8
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 415.9999999999999,
          y: 400
        },
        centreOfRotation: {
          x: 415.9999999999999,
          y: 400
        },
        vertices: [
          {
            x: 11.476744186046655,
            y: -5.983899821109124
          },
          {
            x: 11.476744186046655,
            y: -17.983899821109123
          },
          {
            x: 36.47674418604666,
            y: 0.01610017889087577
          },
          {
            x: 11.476744186046655,
            y: 18.016100178890877
          },
          {
            x: 11.476744186046655,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: 6.016100178890876
          },
          {
            x: -38.52325581395334,
            y: -5.983899821109124
          }
        ],
        physics: {
          density: 1,
          mass: 1118,
          momentOfInertiaCOM: 492952.605545617,
          velocity: {
            x: 0.4,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -38.52325581395334,
          maxX: 36.47674418604666,
          minY: -17.983899821109123,
          maxY: 18.016100178890877,
          centre: {
            x: -1.023255813953341,
            y: 0.016100178890877004
          },
          vertices: [
            {
              x: -38.52325581395334,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: -17.983899821109123
            },
            {
              x: 36.47674418604666,
              y: 18.016100178890877
            },
            {
              x: -38.52325581395334,
              y: 18.016100178890877
            }
          ],
          radius: 41.59627387158614
        },
        referenceVectors: {
          location: {
            x: 11.476744186046655,
            y: -11.983899821109123
          },
          sideVector: {
            x: 0,
            y: -12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 9
      }
    ]
  },
  {
    _id: "5f79a68f2725a017197c4cf0",
    name: "Parallel Bars",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 20,
      y: 291
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,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QO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECAAAECBAgQIECgOwEBvbuRuBABAgQIECBAgAABAgQIzCggoM84dT0TIECAAAECBAgQIECAQHcCAnp3I3EhAgQIECBAgAABAgQIEJhRQECfcep6JkCAAAECBAgQIECAAIHuBAT07kbiQgQIECBAgAABAgQIECAwo4CAPuPU9UyAAAECBAgQIECAAAEC3QkI6N2NxIUIECBAgAABAgQIECBAYEYBAX3GqeuZAAECBAgQIECAAAECBLoTENC7G4kLESBAgAABAgQIECBAgMCMAgL6jFPXMwECBAgQIECAAAECBAh0JyCgdzcSFyJAgAABAgQIECBAgACBGQUE9BmnrmcCBAgQIECAAAECBAgQ6E5AQO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECAAAECBAgQIECgOwEBvbuRuBABAgQIECBAgAABAgQIzCggoM84dT0TIECAAAECBAgQIECAQHcCAnp3I3EhAgQIECBAgAABAgQIEJhRQECfcep6JkCAAAECBAgQIECAAIHuBAT07kbiQgQIECBAgAABAgQIECAwo4CAPuPU9UyAAAECBAgQIECAAAEC3QkI6N2NxIUIECBAgAABAgQIECBAYEYBAX3GqeuZAAECBAgQIECAAAECBLoTENC7G4kLESBAgAABAgQIECBAgMCMAgL6jFPXMwECBAgQIECAAAECBAh0JyCgdzcSFyJAgAABAgQIECBAgACBGQUE9BmnrmcCBAgQIECAAAECBAgQ6E5AQO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECAAAECBAgQIECgOwEBvbuRuBABAgQIECBAgAABAgQIzCggoM84dT0TIECAAAECBAgQIECAQHcCAnp3I3EhAgQIECBAgAABAgQIEJhRQECfcep6JkCAAAECBAgQIECAAIHuBAT07kbiQgQIECBAgAABAgQIECAwo4CAPuPU9UyAAAECBAgQIECAAAEC3QkI6N2NxIUIECBAgAABAgQIECBAYEYBAX3GqeuZAAECBAgQIECAAAECBLoTENC7G4kLESBAgAABAgQIECBAgMCMAgL6jFPXMwECBAgQIECAAAECBAh0JyCgdzcSFyJAgAABAgQIECBAgACBGQUE9BmnrmcCBAgQIECAAAECBAgQ6E5AQO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECAAAECBAgQIECgOwEBvbuRuBABAgQIECBAgAABAgQIzCggoM84dT0TIECAAAECBAgQIECAQHcCAnp3I3EhAgQIECBAgAABAgQIEJhRQECfcep6JkCAAAECBAgQIECAAIHuBAT07kbiQgQIECBAgAABAgQIECAwo4CAPuPU9UyAAAECBAgQIECAAAEC3QkI6N2NxIUIECBAgAABAgQIECBAYEYBAX3GqeuZAAECBAgQIECAAAECBLoTENC7G4kLESBAgAABAgQIECBAgMCMAgL6jFPXMwECBAgQIECAAAECBAh0JyCgdzcSFyJAgAABAgQIECBAgACBGQUE9BmnrmcCBAgQIECAAAECBAgQ6E5AQO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECAAAECBAgQIECgOwEBvbuRuBABAgQIECBAgAABAgQIzCggoM84dT0TIECAAAECBAgQIECAQHcCAnp3I3EhAgQIECBAgAABAgQIEJhRQECfcep6JkCAAAECBAgQIECAAIHuBAT07kbiQgQIECBAgAABAgQIECAwo4CAPuPU9UyAAAECBAgQIECAAAEC3QkI6N2NxIUIECBAgAABAgQIECBAYEYBAX3GqeuZAAECBAgQIECAAAECBLoTENC7G4kLESBAgAABAgQIECBAgMCMAgL6jFPXMwECBAgQIECAAAECBAh0JyCgdzcSFyJAgAABAgQIECBAgACBGQUE9BmnrmcCBAgQIECAAAECBAgQ6E5AQO9uJC5EgAABAgQIECBAgAABAjMKCOgzTl3PBAgQIECAAAECBAgQINCdgIDe3UhciAABAgQIECBAgAABAgRmFBDQZ5y6ngkQIECA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AQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgXENDLiRUgQIAAAQIECBAgQIAAAQJtAQG9beQEAQIECBAgQIAAAQIECBAoFxDQy4kVIECAAAECBAgQIECAAAECbQEBvW3kBAECBAgQIECAAAECBAgQKBcQ0MuJFSBAgAABAgQIECBAgAABAm0BAb1t5AQBAgQIECBAgAABAgQIECgX+P9CuGlpdrqS+gAAAABJRU5ErkJggg==",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 430,
          y: 252
        },
        centreOfRotation: {
          x: 430,
          y: 252
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 480,
          y: 252
        },
        centreOfRotation: {
          x: 480,
          y: 252
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: -0.005,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      }
    ]
  },
  {
    _id: "5f79a6293774cc21a9aadaae",
    name: "Two vertical bars",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 0,
      y: 508
    },
    cursorOnshape: false,
    selected: "none",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: false,
        ids: []
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4Xu3dX6itd3kn8LdQikUFDUgcpnexYGHUGarUeuPQXsRCBaVKkCgUOji9UdSkFcE/UQuamVMV9abSghBy4XiKoqVaL4aKQ6uoWHEMgRrwwoISiHEciJSGlrVhne5s9zl7/9Ze613P8/19zt3J+a33fZ7P9z2B71l7r/0L3//+9/918YsAAQIECBAgQIAAAQIECBA4qsAvKOhH9XdzAgQIECBAgAABAgQIECBwIqCgexAIECBAgAABAgQIECBAgEABAQW9QAhGIECAAAECBAgQIECAAAECCrpngAABAgQIECBAgAABAgQIFBBQ0AuEYAQCBAgQIECAAAECBAgQIKCgewYIECBAgAABAgQIECBAgEABAQW9QAhGIECAAAECBAgQIECAAAECCrpngAABAgQIECBAgAABAgQIFBA4aEH/2c9+trz//e9fHnzwwZNV77777uVd73rX8rSnPW2V1c/ef3vTj3zkI8urXvWqk98+8sgjy5ve9KbloYceOvn96T/b/P7YO6wC5SYECBAgQIAAAQIECEwtcMcddyxPPvnkDYP7779/ueuuu9qZdN/joAX9ox/96PKjH/3opJRvfm3K+u233768+c1vXiXoH//4x8tb3vKWkwL+4he/+Ofuuf3zV7/61SeFfVvW3/e+9904f+wdVoFyEwIECBAgQIAAAQIEphV40YtetPzkJz9ZtqV8W3I/97nPLS984QvbuCTscbCCvim7733ve5f3vOc9yybgza/z/tsh077ofp/97GeXr3/96095V//0f3viiSd+ruBfdM1D7uPaBAgQIECAAAECBAgQ2KfApz71qeXtb3/78oIXvGD5/Oc/f3Lp8/7bPu95iGul7HHpgr4prpt3o69fv/6Ud5e/+c1vnnxZ+GOPPfaUQv6Nb3xj+djHPnbyZ89+9rNPMth+ufjmHevz3tG+VVDnvbt99h3yzbvdm1/bd+jPm+H0Pc6e3/4jwmbmzbvom19n34FX0A/x18k1CRAgQIAAAQIECBA4hsBb3/rW5TOf+cyy6Wgf/vCHb4yweZP1Gc94xvLtb3/7GGMN3zNlj0sX9I3QptBuC/mmqL773e8+KeHbd8hPK5737vS2oL/kJS+58T3gl5Xfvvb0l8hfVMC3/6hw+h7b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AnsWuO/aA8tPl+fs+aq7X+6Zy6PLffe+YfcLeCUBAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTkBBbxeZgQkQIECAAAECBAgQIEAgUUBBT0zVTgQIECBAgAABAgQIECDQTuDfADVsS2m1kkPWAAAAAElFTkSuQmCC",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 430,
          y: 252
        },
        centreOfRotation: {
          x: 430,
          y: 252
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 470,
          y: 262
        },
        centreOfRotation: {
          x: 470,
          y: 262
        },
        vertices: [
          {
            x: -17.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: -124.5
          },
          {
            x: 18.5,
            y: 127.5
          },
          {
            x: -17.5,
            y: 127.5
          }
        ],
        physics: {
          density: 1,
          mass: 9072,
          momentOfInertiaCOM: 48981240,
          velocity: {
            x: -0.02,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -124.5,
          maxY: 127.5,
          centre: {
            x: 0.5,
            y: 1.5
          },
          vertices: [
            {
              x: -17.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: -124.5
            },
            {
              x: 18.5,
              y: 127.5
            },
            {
              x: -17.5,
              y: 127.5
            }
          ],
          radius: 127.27922061357856
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -124.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      }
    ]
  },
  {
    _id: "5fc372bdd38b14a200b2006f",
    name: "No bugs here!",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 0,
      y: 525
    },
    cursorOnshape: false,
    selected: "circle",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: true,
        ids: [4, 5, 6, 7, 8, 9, 10, 11]
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4XuzdB5hdZZ0/8N/MpDdCKAkEkJAEEooSQIn0LqH3toAItsXFVRTU/1rW1dUVEJFVQcoaQKT3UAKI1ADSe0kCARJIaIEUUmfm/9zBickwk1vm3jvnnPuZ59nnWc173vf3fn5nrvc799xz6qZNm9YcfggQIECAAAECBAgQIECAAIEuFagT0LvU3+IECBAgQIAAAQIECBAgQKBFQEB3IhAgQIAAAQIECBAgQIAAgQQICOgJaIISCBAgQIAAAQIECBAgQICAgO4cIECAAAECBAgQIECAAAECCRAQ0BPQBCUQIECAAAECBAgQIECAAAEB3TlAgAABAgQIECBAgAABAgQSICCgJ6AJSiBAgAABAgQIECBAgAABAgK6c4AAAQIECBAgQIAAAQIECCRAoKIBfeHChfGzn/0sLr300pat/su//Ev86Ec/il69elVl623Xb130rLPOigMOOKDlP15//fXxrW99a1k9y/9b7r989NFH45BDDlmh3h133DFy41ZdddWq7MMiBAgQIECAAAECBAgQqKTA2WefHWeeeWbLEmnOO2nfR0UDeg5n1qxZLaE895ML64MHD45vfvOblTy3ls09e/bslvB90kknxVZbbfWJNXPh/LrrrlsWtlvHH3jggSsE+EceeaSqf1ioCo5FCBAgQIAAAQIECBAg8I8PLZfPRcvnuGp9uFqORrTNd2ncR8UC+tSpU+OnP/1p/OQnP4nhw4e3eLf335WjER3NsbL1Wj9d/+xnP7ssjOfmyTV1+UCea2rup1p/VKikh7kJECBAgAABAgQIECCwvEB7H2rm+6AziYJZ2UfBAb31UvCrr7562afRufD62GOPtXwC/f77768QyHOXhv/v//7vCpeCt4bi3CfU7X2ivbJG58J27pPw//qv/1p2bNsmtA3T7dWQ72RaPqDnxuY+9W8b4vPN4d8JECBAgAABAgQIECCQBoGOPtTMZav11ltvhQ8zk7yfrOyj4ICea8bygTwH8OMf/7glhLd+Qr58w9p+Ep37t44+tS6k0a3HLn+JfL4A3vb75bl12n7HfPm1267R+geAe+65Z9mwNH8foxBnYwgQIECAAAECBAgQqB2BjjJV2q4kzso+igrorYF11KhRcd9998VXv/rVDv+iUu6AnvsVae87Bbn/vqPLz5f/g0Luhm7tfcd8+V+9tuNbP7Vffp9ta6idX107JUCAAAECBAgQIEAgawJZCbZZ2UdRAT13Mrbe1TzfHdkrEdCXv8w996n9ym4A19EvTkcBOxfOb7vttg6vCGidL1/Iz9ovrP0QIECAAAECBAgQIJBdgawE26zso+iA3nrZeL5Lvcv9HfTWX4nWSy222WabT3zHvZBfm/bqKjSc5+bvzGX6hdRnDAECBAgQIECAAAECBKolkJXvbmdlH0UF9NZPsI8++uh47rnnVvrItErdxT0XsHOPAOjXr1/07du3w8vbi7lLe+uN7to+17y9MJ/GOxpW65fbOgQIECBAgAABAgQIpEsgK3c/z8o+Cg7obW+g1t5d1dueipV4DvryN25b/o7y7f0atL2cvW3N+b5P3t7l7Gl8ll66XiJUS4AAAQIECBAgQIBANQWy8PzwnFcW9lFwQG97A7VWgPPOO6/lUvPcT9vnnreG+ksvvbTl39t+b73UOwO2V0tu/vbma3sn99ZQ394d2lt/CZa/fL/tuHzfva/mL5K1CBAgQIAAAQIECBAgUA6BXJY688wzW6bK93XmcqxXqTnSvo+CA3olAHPhN3djtiOPPLKo6UsN9kUtYjABAgQIECBAgAABAgQIEKiiQJcG9Nx3vKdPn97ho9rac8iF+tzz13N3cG/v+etVtLMUAQIECBAgQIAAAQIECBAom0CXBvTbb7+9JWQXGrRbL1c/66yzigr1ZdMyEQECBAgQIECAAAECBAgQqJBAlwb0Cu3JtAQIECBAgAABAgQIECBAIHUCAnrqWqZgAgQIECBAgAABAgQIEMiigICexa7aEwECBAgQIECAAAECBAikTkBAT13LFEyAAAECBAgQIECAAAECWRQQ0LPYVXsiQIAAAQIECBAgQIAAgdQJCOipa5mCCRAgQIAAAQIECBAgQCCLAgJ6FrtqTwQIECBAgAABAgQIECCQOgEBPXUtUzABAgQIECBAgAABAgQIZFFAQM9iV+2JAAECBAgQIECAAAECBFInIKCnrmUKJkCAAAECBAgQIECAAIEsCgjoWeyqPREgQIAAAQIECBAgQIBA6gQE9NS1TMEECBAgQIAAAQIECBAgkEUBAT2LXbUnAgQIECBAgAABAgQIEEidgICeupYpmAABAgQIECBAgAABAgSyKCCgZ7Gr9kSAAAECBAgQIECAAAECqRMQ0FPXMgUTIECAAAECBAgQIECAQBYFBPQsdtWeCBAgQIAAAQIECBAgQCB1AgJ66lqmYAIECBAgQIAAAQIECBDIooCAnsWu2hMBAgQIECBAgAABAgQIpE5AQE9dyxRMgAABAgQIECBAgAABAlkUENCz2FV7IkCAAAECBAgQIECAAIHUCQjoqWuZggkQIECAAAECBAgQIEAgiwICeha7ak8ECBAgQIAAAQIECBAgkDoBAT11LVMwAQIECBAgQIAAAQIECGRRQEDPYlftiQABAgQIECBAgAABAgRSJyCgp65lCiZAgAABAgQIECBAgACBLAoI6Fnsqj0RIECAAAECBAgQIECAQOoEBPTUtUzBBAgQIECAAAECBAgQIJBFAQE9i121JwIECBAgQIAAAQIECBBInYCAnrqWKZgAAQIECBAgQIAAAQIEsiggoGexq/ZEgAABAgQIECBAgAABAqkTENBT1zIFEyBAgAABAgQIECBAgEAWBQT0LHbVnggQIECAAAECBAgQIEAgdQICeupapmACBAgQIECAAAECBAgQyKKAgJ7FrtoTAQIECBAgQIAAAQIECKROQEBPXcsUTIAAAQIECBAgQIAAAQJZFBDQs9hVeyJAgAABAgQIECBAgACB1AkI6KlrmYIJECBAgAABAgQIECBAIIsCAnoWu2pPBAgQIECAAAECBAgQIJA6AQE9dS1TMAECBAgQIECAAAECBAhkUUBAz2JX7YkAAQIECBAgQIAAAQIEUicgoKeuZQomQIAAAQIECBAgQIAAgSwKCOhZ7Ko9ESBAgAABAgQIECBAgEDqBAT01LVMwQQIECBAgAABAgQIECCQRQEBPYtdtScCBAgQIECAAAECBAgQSJ2AgJ66limYAAECBAgQIECAAAECBLIoIKBnsav2RIAAAQIECBAgQIAAAQKpExDQU9cyBRMgQIAAAQIECBAgQIBAFgUE9Cx21Z4IECBAgAABAgQIECBAIHUCAnrqWqZgAgQIECBAgAABAgQIEMiigICexa7aEwECBAgQIECAAAECBAikTkBAT13LFEyAAAECBAgQIECAAAECWRQQ0LPYVXsiQIAAAQIECBAgQIAAgdQJCOipa5mCCRAgQIAAAQIECBAgQCCLAgJ6FrtqTwQIECBAgAABAgQIECCQOgEBPXUtUzABAgQIECBAgAABAgQIZFFAQM9iV+2JAAECBAgQIECAAAECBFInIKCnrmUKJkCAAAECBAgQIECAAIEsCgjoWeyqPREgQIAAAQIECBAgQIBA6gQE9NS1TMEECBAgQIAAAQIECBAgkEUBAT2LXbUnAgQIECBAgAABAgQIEEidgICeupYpmAABAgQIECBAgAABAgSyKCCgZ7Gr9kSAAAECBAgQIECAAAECqRMQ0FPXMgUTIECAAAECBAgQIECAQBYFBPQsdtWeCBAgQIAAAQIECBAgQCB1AgJ66lqmYAIECBAgQIAAAQIECBDIooCAnsWu2hMBAgQIECBAgAABAgQIpE5AQE9dyxRMgAABAgQIECBAgAABAlkUENCz2FV7IkCAAAECBAgQIECAAIHUCQjoqWuZggkQIECAAAECBAgQIEAgiwICeha7ak8ECBAgQIAAAQIECBAgkDoBAT11LVMwAQIECBAgQIAAAQIECGRRQEDPYlftiQABAgQIECBAgAABAgRSJyCgp65lCiZAgAABAgQIECBAgACBLAoI6Fnsqj0RIECAAAECBAgQIECAQOoEBPTUtUzBBAgQIECAAAECBAgQIJBFAQE9i121JwIECBAgQIAAAQIECBBInYCAnrqWKZgAAQIECBAgQIAAAQIEsiggoGexq/ZEgAABAgQIECBAgAABAqkTENBT1zIFEyBAgAABAgQIECBAgEAWBQT0LHbVnggQIECAAAECBAgQIEAgdQICeupapmACBAgQIECAAAECBAgQyKKAgJ7FrtoTAQIECBAgQIAAAQIECKROQEBPXcsUTIAAAQIECBAgQIAAAQJZFBDQs9hVeyJAgAABAgQIECBAgACB1AkI6KlrmYIJECBAgAABAgQIECBAIIsCAnoWu2pPBAgQIECAAAECBAgQIJA6AQE9dS1TMAECBAgQIECAAAECBAhkUUBAz2JX7YkAAQIECBAgQIAAAQIEUicgoKeuZQomQIAAAQIECBAgQIAAgSwKCOhZ7Ko9ESBAgAABAgQIECBAgEDqBAT01LVMwQQIECBAgAABAgQIECCQRQEBPYtdtScCBAgQIECAAAECBAgQSJ2AgJ66limYAAECBAgQIECAAAECBLIoIKBnsav2RIAAAQIECBAgQIAAAQKpExDQU9cyBRMgQIAAAQIECBAgQIBAFgUE9Cx21Z4IECBAgAABAgQIECBAIHUCAnrqWqZgAgQIECBAgAABAgQIEMiigICexa7aEwECBAgQIECAAAECBAikTkBAT13LFEyAAAECBAgQIECAAAECWRQQ0LPYVXsiQIAAAQIECBAgQIAAgdQJCOipa5mCCRAgQIAAAQIECBAgQCCLAgJ6FrtqTwQIECBAgAABAgQIECCQOgEBPXUtUzABAgQIECBAgAABAgQIZFFAQM9iV+2JAAECBAgQIECAAAECBFInIKCnrmUKJkCAAAECBAgQIECAAIEsCgjoWeyqPREgQIAAAQIECBAgQIBA6gQE9NS1TMEECBAgQIAAAQIECBAgkEUBAT2LXbUnAgQIECBAgAABAgQIEEidgICeupYpmAABAgQIECBAgAABAgSyKCCgZ7Gr9kSAAAECBAgQIECAAAECqRMQ0FPXMgUTIECAAAECBAgQIECAQBYFBPQsdtWeCBAgQIAAAQIECBAgQCB1AgJ66lqmYAIECBAgQIAAAQIECBDIooCAnsWu2hMBAgQIECBAgAABAgQIpE5AQE9dyxRMgAABAgQIECBAgAABAlkUENCz2FV7IkCAAAECBAgQIECAAIHUCQjoqWuZggkQIECAAAECBAgQIEAgiwICeha7ak8ECBAgQIAAAQIECBAgkDoBAT11LVMwAQIECBAgQIAAAQIECGRRQEDPYlftiQABAgQIECBAgAABAgRSJyCgp65lCiZAgAABAgQIECBAgACBLAoI6Fnsqj0RIECAAAECBAgQIECAQOoEBPTUtUzBBAgQIECAAAECBAgQIJBFAQE9i121JwIECBAgQIAAAQIECBBInYCAnrqWKZgAAQIECBAgQIAAAQIEsiggoGexq/ZEgAABAgQIECBAgAABAqkTENBT1zIFEyBAgAABAgQIECBAgEAWBQT0LHbVnggQIECAAAECBAgQIEAgdQICeupapmACBAgQIECAAAECBAgQyKKAgJ7FrtoTAQIECBAgQIAAAQIECKROQEBPXcsUTIAAAQIECBAgQIAAAQJZFBDQs9hVeyJAgAABAgQIECBAgACB1AkI6KlrmYIJECBAgAABAgQIECBAIIsCAnoWu2pPBAgQIECAAAECBAgQIJA6AQE9dS1TMAECBAgQIECAAAECBAhkUUBAz2JX7YkAAQIECBAgQIAAAQIEUicgoKeuZQomQIAAAQIECBAgQIAAgSwK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AAECBAgQIEAgjQICehq7pmYCBAgQIECAAAECBAgQyJyAgJ65ltoQAQIECBAgQIAAAQIECKRRQEBPY9fUTIAAAQIECBAgQIAAAQKZExDQM9dSGyJAgAABAgQIECBAgACBNAoI6GnsmpoJECBAgAABAgQIECBAIHMCAnrmWmpDBAgQIECAAAECBAgQIJBGAQE9jV1TMwECBAgQIECAAAECBAhkTkBAz1xLbYgAAQIECBAgQIAAAQIE0iggoKexa2omQIAAAQIECBAgQIAAgcwJCOiZa6kNESBAgAABAgQIECBAgEAaBQT0NHZNzQQIECBAgAABAgQIECCQOQEBPXMttSECBAgQIECAAAECBAgQSKOAgJ7GrqmZAAECBAgQIECAAAECBDInIKBnrqU2RIAAAQIECBAgQIAAAQJpFBDQ09g1NRMgQIAAAQIECBAgQIBA5gQE9My11IYIECBAgAABAgQIECBAII0CAnoau6ZmAgQIECBAgAABAgQIEMicgICeuZbaEAECBAgQIECAAAECBAikUUBAT2PX1EyAAAECBAgQIECAAAECmRMQ0DPXUhsiQIAAAQIECBAgQIAAgTQKCOhp7JqaCRAgQIAAAQIECBAgQCBzAgJ65lpqQwQIECBAgAABAgQIECCQRgEBPY1dUzMBAgQIECBAgAABAgQIZE5AQM9cS22IAAECBAgQIECAAAECBNIoIKCnsWtqJkCAAAECBAgQIECAAIHMCQjomWupDREgQIAAAQIECBAgQIBAGgUE9DR2Tc0ECBAgQIAAAQIECBAgkDkBAT1zLbUhAgQIECBAgAABAgQIEEijgICexq6pmQABAgQIECBAgAABAgQyJyCgZ66lNkSAAAECBAgQIECAAAECaRQQ0NPYNTUTIECAAAECBAgQIECAQOYEBPTMtdSGCBAgQIAAAQIECBAgQCCNAgJ6GrumZgIECBAgQIAAAQIECBDInICAnrmW2hABAgQIECBAgAABAgQIpFFAQE9j19RMgAABAgQIECBAgAABApkTENAz11IbIkCAAAECBAgQIECAAIE0CgjoaeyamgkQIECAAAECBAgQIEAgcwICeuZaakMECBAgQIAAAQIECBAgkEYBAT2NXVMzAQIECBAgQIAAAQIECGROQEDPXEttiAABAgQIECBAgAABAgTSKCCgp7FraiZAgAABAgQIECBA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dPROHY5piCXx3os3xB6b94k9dt1+pUQCetLPIPURIFCIgIBeiJIxBAgQIJB5gRdeeCEaGxs73OfTTz+90n8vB1D37t1j00037XCqHj16xIYbbliOpcxBoGiBQgN668RXXTshHpnaFAOH7xZNPQd/Yr2VBfT6RbPivZcnxpjhPePoQ9u/oqTthAJ60S11AAECCRQQ0BPYFCURIECAAAECBJImkAvod911V4wZM6ao0l599dV4bvIbMWtur6jrtUZ07zMo6rv1inffmRmNixfG4KHrR9PShbF0wexoXvhOrN5nfowePjRGjhxZ1Dq5K2G23HLLousrahGDCRAgUGEBAb3CwKYnQIAAAQIECGRF4KmnnoqFCxeWvJ0PPvgg5s+fH3Pnzm35v9xP3759o3///i3/t8oqq5T8VZKGhobYaqutSq7NgQQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECBAgACBJAgI6EnoghoIECBAgAABAgQIECBAoOYFBPSaPwUAECBAgAABAgQIECBAgEASBAT0JHRBDQQIECBAgAABAgQIECBQ8wICes2fAgAIECBAgAABAgQIECBAIAkCAnoSuqAGAgQIECBAgAABAgQIEKh5AQG95k8BAAQIECBAgAABAgQIECCQBAEBPQldUAMBAgQIECBAgAABAgQI1LyAgF7zpwAAAgQIECBAgAABAgQIEEiCgICehC6ogQABAgQIECBAgAABAgRqXkBAr/lTAAABAgQIECBAgAABAgQIJEFAQE9CF9RAgAABAgQIECBAgAABAjUvIKDX/CkAgAABAgQIECBAgAABAgSSICCgJ6ELaiBAgAABAgQIECBAgACBmhcQ0Gv+FABAgAABAgQIECBAgAABAkkQENCT0AU1ECBAgAABAgQIECBAgEDNCwjoNX8KACBAgAABAgQIECDw/9u7d6U2ligKoM1IZfOwxUMOICDw/3+Ef4XEX2FpxtW4yOwCabrKfU4vRze4wD5rT7ILIREgQKAHAQO9hxZkIECAAAECBAgQIECAAIHhBQz04R8BAAQIECBAgAAB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",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 185,
          y: 207
        },
        centreOfRotation: {
          x: 185,
          y: 207
        },
        vertices: [
          {
            x: 10.999999999999998,
            y: -18.999999999999996
          },
          {
            x: 22,
            y: 0.05255888325765638
          },
          {
            x: 10.999999999999998,
            y: 19.10511776651531
          },
          {
            x: -10.999999999999998,
            y: 19.10511776651531
          },
          {
            x: -22,
            y: 0.05255888325765638
          },
          {
            x: -10.999999999999998,
            y: -18.999999999999996
          }
        ],
        physics: {
          density: 1,
          mass: 1277,
          momentOfInertiaCOM: 261646,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -22,
          maxX: 22,
          minY: -18.999999999999996,
          maxY: 19.10511776651531,
          centre: {
            x: 0,
            y: 0.052558883257656674
          },
          vertices: [
            {
              x: -22,
              y: -18.999999999999996
            },
            {
              x: 22,
              y: -18.999999999999996
            },
            {
              x: 22,
              y: 19.10511776651531
            },
            {
              x: -22,
              y: 19.10511776651531
            }
          ],
          radius: 29.1032644217105
        },
        referenceVectors: {
          location: {
            x: 16.5,
            y: -9.47372055837117
          },
          sideVector: {
            x: 11.000000000000002,
            y: 19.052558883257653,
            z: 0,
            magnitude: 22.000000000000004
          },
          unitNormal: {
            x: 0.8660254037844386,
            y: -0.5000000000000001
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 310.00000000000045,
          y: 216
        },
        centreOfRotation: {
          x: 310.00000000000045,
          y: 216
        },
        vertices: [
          {
            x: -5.719626168223964,
            y: -5.719626168224303
          },
          {
            x: -5.719626168223964,
            y: -29.719626168224302
          },
          {
            x: 6.280373831776036,
            y: -29.719626168224302
          },
          {
            x: 6.280373831776036,
            y: -5.719626168224303
          },
          {
            x: 30.280373831776036,
            y: -5.719626168224303
          },
          {
            x: 30.280373831776036,
            y: 6.280373831775697
          },
          {
            x: 6.280373831776036,
            y: 6.280373831775697
          },
          {
            x: 6.280373831776036,
            y: 30.280373831775698
          },
          {
            x: -5.719626168223964,
            y: 30.280373831775698
          },
          {
            x: -5.719626168223964,
            y: 6.280373831775697
          },
          {
            x: -29.719626168223964,
            y: 6.280373831775697
          },
          {
            x: -29.719626168223964,
            y: -5.719626168224303
          }
        ],
        physics: {
          density: 1,
          mass: 1391,
          momentOfInertiaCOM: 485149.30841121485,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -29.719626168223964,
          maxX: 30.280373831776036,
          minY: -29.719626168224302,
          maxY: 30.280373831775698,
          centre: {
            x: 0.2803738317760356,
            y: 0.2803738317756981
          },
          vertices: [
            {
              x: -29.719626168223964,
              y: -29.719626168224302
            },
            {
              x: 30.280373831776036,
              y: -29.719626168224302
            },
            {
              x: 30.280373831776036,
              y: 30.280373831775698
            },
            {
              x: -29.719626168223964,
              y: 30.280373831775698
            }
          ],
          radius: 42.42640687119285
        },
        referenceVectors: {
          location: {
            x: -5.719626168223964,
            y: -17.719626168224302
          },
          sideVector: {
            x: 0,
            y: -24,
            z: 0,
            magnitude: 24
          },
          unitNormal: {
            x: -1,
            y: 6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 479.9999999999998,
          y: 217
        },
        centreOfRotation: {
          x: 479.9999999999998,
          y: 217
        },
        vertices: [
          {
            x: 0.010446897379248834,
            y: -49.970797720797734
          },
          {
            x: 11.23614598123659,
            y: -15.421646984468795
          },
          {
            x: 47.56327271213692,
            y: -15.421647439545106
          },
          {
            x: 18.17400956253898,
            y: 5.93090154287332
          },
          {
            x: 29.399709512002907,
            y: 40.48005199794964
          },
          {
            x: 0.010446897379248834,
            y: 19.12750227920226
          },
          {
            x: -29.378815717244407,
            y: 40.48005199794964
          },
          {
            x: -18.15311576778048,
            y: 5.93090154287332
          },
          {
            x: -47.54237891737843,
            y: -15.421647439545106
          },
          {
            x: -11.21525218647809,
            y: -15.421646984468795
          }
        ],
        physics: {
          density: 1,
          mass: 2808,
          momentOfInertiaCOM: 1706190.5623219367,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -47.54237891737843,
          maxX: 47.56327271213692,
          minY: -49.970797720797734,
          maxY: 40.48005199794964,
          centre: {
            x: 0.010446897379246423,
            y: -4.745372861424048
          },
          vertices: [
            {
              x: -47.54237891737843,
              y: -49.970797720797734
            },
            {
              x: 47.56327271213692,
              y: -49.970797720797734
            },
            {
              x: 47.56327271213692,
              y: 40.48005199794964
            },
            {
              x: -47.54237891737843,
              y: 40.48005199794964
            }
          ],
          radius: 65.62476892667539
        },
        referenceVectors: {
          location: {
            x: 5.62329643930792,
            y: -32.696222352633264
          },
          sideVector: {
            x: 11.225699083857341,
            y: 34.54915073632894,
            z: 0,
            magnitude: 36.32712673090034
          },
          unitNormal: {
            x: 0.9510565201662639,
            y: -0.3090169824608951
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 6
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 676.0000000000005,
          y: 203.00000000000014
        },
        centreOfRotation: {
          x: 676.0000000000005,
          y: 203.00000000000014
        },
        vertices: [
          {
            x: 30.280373831776036,
            y: -19.177570093457874
          },
          {
            x: 30.280373831776036,
            y: -7.177570093457875
          },
          {
            x: 6.280373831776036,
            y: -7.177570093457875
          },
          {
            x: 6.280373831776036,
            y: 40.822429906542126
          },
          {
            x: -5.719626168223964,
            y: 40.822429906542126
          },
          {
            x: -5.719626168223964,
            y: -7.177570093457875
          },
          {
            x: -29.719626168223964,
            y: -7.177570093457875
          },
          {
            x: -29.719626168223964,
            y: -19.177570093457874
          }
        ],
        physics: {
          density: 1,
          mass: 1391,
          momentOfInertiaCOM: 674273.7943925232,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -29.719626168223964,
          maxX: 30.280373831776036,
          minY: -19.177570093457874,
          maxY: 40.822429906542126,
          centre: {
            x: 0.2803738317760356,
            y: 10.822429906542126
          },
          vertices: [
            {
              x: -29.719626168223964,
              y: -19.177570093457874
            },
            {
              x: 30.280373831776036,
              y: -19.177570093457874
            },
            {
              x: 30.280373831776036,
              y: 40.822429906542126
            },
            {
              x: -29.719626168223964,
              y: 40.822429906542126
            }
          ],
          radius: 42.42640687119285
        },
        referenceVectors: {
          location: {
            x: 30.280373831776036,
            y: -13.177570093457874
          },
          sideVector: {
            x: 0,
            y: 12,
            z: 0,
            magnitude: 12
          },
          unitNormal: {
            x: 1,
            y: -6.123233995736766e-17
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 7
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 174,
          y: 359
        },
        centreOfRotation: {
          x: 174,
          y: 359
        },
        vertices: [
          {
            x: -17.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: -17.5
          },
          {
            x: 18.5,
            y: 18.5
          },
          {
            x: -17.5,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: 1296,
          momentOfInertiaCOM: 279720,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 0.5,
            y: 0.5
          },
          vertices: [
            {
              x: -17.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: -17.5
            },
            {
              x: 18.5,
              y: 18.5
            },
            {
              x: -17.5,
              y: 18.5
            }
          ],
          radius: 25.45584412271571
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -17.5
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 8
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 310,
          y: 356
        },
        centreOfRotation: {
          x: 310,
          y: 356
        },
        vertices: [
          {
            x: -20,
            y: 11.675849242814401
          },
          {
            x: 20,
            y: 11.675849242814401
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.675849242814401,
          centre: {
            x: 0,
            y: -5.644658832874372
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.675849242814401
            },
            {
              x: -20,
              y: 11.675849242814401
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.675849242814401
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 9
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 473,
          y: 366
        },
        centreOfRotation: {
          x: 473,
          y: 366
        },
        vertices: [
          {
            x: -0.017264078077140917,
            y: -21.89763779527559
          },
          {
            x: 20.905979280416236,
            y: -6.696011671524432
          },
          {
            x: 12.914011472357268,
            y: 17.900736080973257
          },
          {
            x: -12.948539628511549,
            y: 17.900736080973257
          },
          {
            x: -20.940507436570517,
            y: -6.696011671524432
          }
        ],
        physics: {
          density: 1,
          mass: 1143,
          momentOfInertiaCOM: 211398.978127734,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20.940507436570517,
          maxX: 20.905979280416236,
          minY: -21.89763779527559,
          maxY: 17.900736080973257,
          centre: {
            x: -0.017264078077140255,
            y: -1.998450857151166
          },
          vertices: [
            {
              x: -20.940507436570517,
              y: -21.89763779527559
            },
            {
              x: 20.905979280416236,
              y: -21.89763779527559
            },
            {
              x: 20.905979280416236,
              y: 17.900736080973257
            },
            {
              x: -20.940507436570517,
              y: 17.900736080973257
            }
          ],
          radius: 28.87489832773717
        },
        referenceVectors: {
          location: {
            x: 10.444357601169548,
            y: -14.29682473340001
          },
          sideVector: {
            x: 20.923243358493377,
            y: 15.201626123751158,
            z: 0,
            magnitude: 25.862551100868817
          },
          unitNormal: {
            x: 0.5877852522924731,
            y: -0.8090169943749473
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 10
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 673.9999999999998,
          y: 366
        },
        centreOfRotation: {
          x: 673.9999999999998,
          y: 366
        },
        vertices: [
          {
            x: 0.05095155102505285,
            y: 20
          },
          {
            x: 4.20918536738024,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541056,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874516,
            y: 16.18033988749895
          },
          {
            x: 14.913848060572937,
            y: 13.382612127177165
          },
          {
            x: 17.371459626713825,
            y: 10.000000000000002
          },
          {
            x: 19.072081876928124,
            y: 6.180339887498949
          },
          {
            x: 19.94138945839052,
            y: 2.0905692653530736
          },
          {
            x: 19.94138945839052,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928127,
            y: -6.180339887498947
          },
          {
            x: 17.37145962671383,
            y: -9.999999999999996
          },
          {
            x: 14.913848060572942,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874518,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541061,
            y: -18.270909152852013
          },
          {
            x: 4.209185367380248,
            y: -19.56295201467611
          },
          {
            x: 0.0509515510250553,
            y: -20
          },
          {
            x: -4.107282265330128,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490943,
            y: -18.27090915285202
          },
          {
            x: -11.704753494824407,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522828,
            y: -13.382612127177168
          },
          {
            x: -17.269556524663717,
            y: -10.000000000000009
          },
          {
            x: -18.970178774878015,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340412,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340412,
            y: 2.09056926535306
          },
          {
            x: -18.97017877487802,
            y: 6.180339887498945
          },
          {
            x: -17.269556524663727,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522838,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824415,
            y: 16.180339887498945
          },
          {
            x: -8.083781310490966,
            y: 18.27090915285201
          },
          {
            x: -4.107282265330144,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.897271268,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340412,
          maxX: 19.94138945839052,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102505444,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340412,
              y: -20
            },
            {
              x: 19.94138945839052,
              y: -20
            },
            {
              x: 19.94138945839052,
              y: 20
            },
            {
              x: -19.839486356340412,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202646,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355187,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706139
          },
          unitNormal: {
            x: 0.10452846326765329,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 11
      }
    ]
  },
  {
    _id: "5fc375c50874b9c09c09d7c1",
    name: "untitled",
    backgroundColour: "#E0E0E0",
    created: "",
    lastModified: "",
    mousePos: {
      x: 1,
      y: 66
    },
    cursorOnshape: false,
    selected: "triangle",
    timeStep: 16,
    time: 0,
    settings: {
      display: true,
      restitution: 1
    },
    currentEvents: {
      click: {
        state: true,
        ids: [4, 5, 6, 7, 8, 10, 10]
      },
      doubleClick: {
        state: false,
        ids: []
      },
      collision: {
        state: false,
        ids: [],
        pairs: []
      },
      hover: {
        state: false,
        ids: []
      },
      drag: {
        state: false,
        ids: []
      }
    },
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAJYCAYAAADxHswlAAAgAElEQVR4XuzdC3RU5b3//08yQBIgIeEiMeHf4koiAek5BrCkipeCIlHwBkixHIVi1d/qQduKVFut11MtpXJRz/Gg/Eyrp/4UAkZRAxQKKhgQoRpAJInQGpEACs3FxCQz8197PJOSkGRmz+yZ7Jl5Z62s2mQ/z/N9Xt8tyw979t5xhw4dcosvBBBAAAEEEEAAAQQQQAABBBDoVoE4Anq3+rM4AggggAACCCCAAAIIIIAAAh4BAjonAgIIIIAAAggggAACCCCAAAI2ECCg26AJlIAAAggggAACCCCAAAIIIIAAAZ1zAAEEEEAAAQQQQAABBBBAAAEbCBDQbdAESkAAAQQQQAABBBBAAAEEEECAgM45gAACCCCAAAIIIIAAAggggIANBAjoNmgCJSCAAAIIIIAAAggggAACCCBAQOccQAABBBBAAAEEEEAAAQQQQMAGAmEL6MuWLdO3vvUtXXPNNWHddmVlpebNm6d9+/Z51l2yZEmbGk6cOKGf/vSn2rJli+f3P//5z3X77beHtUYWQwABBBBAAAEEEEAAAQS6U8DIa48//rinhIsvvtiTm9LS0rqzpIDWjvR9hCWge5Hah+OAxE0M2rlzp6ZNm6ZVq1ZpzJgx8ob1hx56qM3/v+WWWzyh3RvWr7322rD/RYKJbXEoAggggAACCCCAAAIIIGCZwCuvvKI1a9a0hnIjv1VXV+u+++5TYmKiZeuEeqJo2EdIA7o38B47dkwDBw7UddddF7bg29jYqIcffliDBw9uc0XcONmML+MqeUcnntHU9957L+JOxlCf7MyPAAIIIIAAAggggAAC0SfgzWzGp46Ni5rGV0c/s/vOo2Uffgd0I7gaHwX3Xo02GmQE3Pfff9/zNy1ffvmlHnzwQd1///3Kysry9M8Y8/e//13GFWojLJ933nkBB/T2V787OnFODd++TipvgA+mJrufpNSHAAIIIIAAAggggAACCHQlYOSs9jnOm/W64xblQLsVLfvwO6C3D+QGwK9//Ws98cQTrYG8M0wrwnBHV8SNj7Ab63d0f4S3QcaVcuMY7z3m3o/ZewP8zTffrJKSEv3P//yPp3zuQQ/0XwnGIYAAAggggAACCCCAQKQJdJapTr34GQl7ipZ9mAro3lCbm5urt99+23Nl3J+HvlkR0I2ToqN7Coyfd/RQN+8V90GDBrUGeO/PjLqNBx8YnwgwPn7v/UsG7/5Gjx7Ng+Ii4d9CakQAAQQQQAABBBBAAIGgBKIl2EbLPkwFdKPz3gev/fCHP/T7Pm2rAvqpH3M3PkZvBOxT75U49czs7CMO3pD/wAMPyPhuP97Yn7+fDAjq3wQGI4AAAggggAACCCCAAALdLBAtwTZa9mE6oHvvRTfz6H2rArpx7no/anH++ed3+vF247jOArq3cZ0F9M7GdfO/NyyPAAIIIIAAAggggAACCFguEC33bkfLPkwFdO8V7FmzZmnv3r2nPSG9s7PFyoBuBGzjFQB9+/ZVnz59Ov0oundN45Vp3qcRGvWd+pT25cuXn/Zu9q7ua7f83wYmRAABBBBAAAEEEEAAAQS6USBann4eLfvwO6C3f0hbR09VD0dA98IbD3079YnyHa3dPmyfeg+6ce98+79l4R70bvyTgaURQAABBBBAAAEEEECgWwSi4f3h3ouxkf4+d78D+qmvVEtLS/OcOEYjjavQxkPWjK+OHs9v/LyzK+iBPhmwo1qMdTqaz3vPvPdM9z7F3fv/vaF93759nh/xFPdu+TOBRRFAAAEEEEAAAQQQQKAbBYws9fjjj3sqMHM7czeW3OHSkb4PvwN6KOCNK9bGK85mzpxpavpAg72pRTgYAQQQQAABBBBAAAEEEEAAgTAKdGtAN65uV1VV+fWqNq+JEeqNp6wbT3A3nuTOFwIIIIAAAggggAACCCCAAALRINCtAX39+vWekO1v0PY+Qb79x9SjoRHsAQEEEEAAAQQQQAABBBBAILYFujWgxzY9u0cAAQQQQAABBBBAAAEEEEDgnwIEdM4GBBBAAAEEEEAAAQQQQAABBGwgQEC3QRMoAQEEEEAAAQQQQAABBBBAAAECOucAAggggAACCCCAAAIIIIAAAjYQIKDboAmUgAACCCCAAAIIIIAAAggggAABnXMAAQQQQAABBBBAAAEEEEAAARsIENBt0ARKQAABBBBAAAEEEEAAAQQQQICAzjmAAAIIIIAAAggggAACCCCAgA0ECOg2aAIlIIAAAggggAACCCCAAAIIIEBA5xxAAAEEEEAAAQQQQAABBBBAwAYCBHQbNIESEEAAAQQQQAABBBBAAAEEECCgcw4ggAACCCCAAAIIIIAAAgggYAMBAroNmkAJCCCAAAIIIIAAAggggAACCBDQOQcQQAABBBBAAAEEEEAAAQQQsIEAAd0GTaAEBBBAAAEEEEAAAQQQQAABBAjonAMIIIAAAggggAACCCCAAAII2ECAgG6DJlACAggggAACCCCAAAIIIIAAAgR0zgEEEEAAAQQQQAABBBBAAAEEbCBAQLdBEygBAQQQQAABBBBAAAEEEEAAAQI65wACCCCAAAIIIIAAAggggAACNhCI++ijv7mNOpKSPP/DFwIIIIAAAggggAACCCCAAAIIdINA3LZtn7rd7jhlZrZ0w/IsiQACCCCAAAIIIIAAAggggAAChkDcX/7ymefS+YABTqWkuFBBAAEEEEAAAQQQQAABBBBAAIFuEGgN6PHx0pAhzXI4uqEKlkQAAQQQQAABBBBAAAEEEEAgxgVaA7rhkJzs1MCBXEWP8XOC7SOAAAIIIIAAAggggAACCHSDQJuAHhcnz73oPXvywLhu6AVLIoAAAggggAACCCCAAAIIxLBAm4BuOCQluZSe7oxhEraOAAIIIIAAAggggAACCCCAQPgFTgvoRglnnNGiPn24ih7+drAiAggggAACCCCAAAIIIIBArAp0GNB79HBryJAWGR955wsBBBBAAAEEEEAAAQQQQAABBEIv0GFAN5bt39+pfv14YFzoW8AKCCCAAAIIIIAAAggggAACCJzyHvT2GLx2jdMDAQQQQAABBBBAAAEEEEAAgfAJdHoF3Sihb1+nBg3iKnr42sFKCCCAAAIIIIAAAggggAACsSrQZUA3UDIyWpSQwAPjYvUEYd8IIIAAAggggAACCCCAAALhEfAZ0BMT3TrzzJbwVMMqCCCAAAIIIIAAAggggAACCMSogM+AbrgMGtSivn25ih6j5wjbRgABBBBAAAEEEEAAAQQQCIOAXwGd166FoRMsgQACCCCAAAIIIIAAAgggENMCfgV0Qyg11am0NB4YF9NnC5tHAAEEEEAAAQQQQAABBBAImYDfAf2b1661yOHgo+4h6wYTI4AAAggggAACCCCAAAIIxKyA3wHdEOrTx6UzznDGLBYbRwABBBBAAAEEEEAAAQQQQCBUAqYCulEEr10LVSuYFwEEEEAAAQQQQAABBBBAIJYFTAd0XrsWy6cLe0cAAQQQQAABBBBAAAEEEAiVgOmAbhQycGCLkpO5Fz1UTWFeBBBAAAEEEEAAAQQQQACB2BMIKKAbD4ozHhhnPDiOLwQQQAABBBBAAAEEEEAAAQQQCF4goIBuLNuvn1P9+/PateBbwAwIIIAAAggggAACCCCAAAIISAEHdF67xumDAAIIIIAAAggggAACCCCAgHUCAQd0owReu2ZdI5gJAQQQQAABBBBAAAEEEEAgtgWCCugGXXp6i5KSeGBcbJ9G7B4BBBBAAAEEEEAAAQQQQCBYgaADeq9ebmVmtgRbB+MRQAABBBBAAAEEEEAAAQQQiGmBoAO6oTdgQItSUriKHtNnEptHAAEEEEAAAQQQQAABBBAISsCSgM5r14LqAYMRQAABBBBAAAEEEEAAAQQQCPwp7u3teO0aZxMCCCCAAAIIIIAAAggggAACgQtYcgXdWN547VpGRot69uSj7oG3g5EIIIAAAggggAACCCCAAAKxKmBZQDcAk5JcSk93xqol+0YAAQQQ+F+BDz/8UA0NDQF7nDhxQnV1da3fbrdbffv2bf1OTU1VvPE3wwF8ORwOjRkzJoCRDEEAAQQQQAABBEIrYGlAN0rltWuhbRizI4AAAnYXOHDggDZu3KhRo0aZKrWiokIfVXym6rpEOXqfoR6JaYrvlSSnI80zj8N5Qu7mRjU31ctZV6WBiXUanp2pYcOGmVqnrKxMo0ePVl5enqlxHIwAAggggAACCIRaIK60tMrSz6QbH3EfMICr6KFuHPMjgAACdhUwAnplZaUKCgr8KvHlote0vaJFA3ImypWQ7tcY70GOpmod+7hE557VS7OmX+HXVfUtW7YoJSWFgG5KmoMRQAABBBBAIBwCcYcOHbI0oIejaNZAAAEEELCvgL8B/a233tLanY1KG3aVnOoZ1IYcataX+4s1/jsJKph4SZdzEdCDomYwAggggAACCIRQgIAeQlymRgABBGJRwJ+A/rtn3lDL4AI5HSmWEvVw1arlb2t059xJSkpK6nBuArql5EyGAAIIIIAAAhYKENAtxGQqBBBAAAGpq4BuPPjt/qc2KG3kjX5RVby3UpsLb/Mc2z9zpMbPfVapg3N8jm347B3Nu2qw0tNP/8g8Ad0nHwcggAACCCCAQDcJENC7CZ5lEUAAgWgV6CygHz16VMuKjygx4wK/tr77zUWqrtyuS2b/txL79pcR1iu2v9z6/31N0nJ0u2Zd2EvZ2dltDiWg+5Lj9wgggAACCCDQXQIE9O6SZ10EEEAgSgU6Cug1NTVavPozOQZ9169dn6wu16YVN+v8GQuVnjXWM6ax7kttLrxV5xbMb/2Zr8ncNRW67dJ4DRo0qPVQArovNX6PAAIIIIAAAt0lQEDvLnnWRQABBKJUoKOAftfCYvU7Z5bfOz5SuV1/fXOR31fLu5q4/tB63T83T4mJiZ7DCOh+t4EDEUAAAQQQQCDMAgT0MIOzHAIIIBDtAu0D+tLlK1Wb+SNT2zY+zn6kolRnnTtFbz451TPWzD3o7ReLr3xWv7x9BgHdVBc4GAEEEEAAAQTCLUBAD7c46yGAAAJRLnBqQN+w6R29Xz9OLfHJpnbtfTjc6Mn3KK9gvmes8bMPNzzp94PiTl0w3t2k4a5iXXvVJK6gm+oEByOAAAIIIIBAOAUI6OHUZi0EEEAgBgS8AX3SpEm66/H1Ss2dZnrX3ivo+VMfUY9e37wuraWpQaVF96pP6pmtod3MxI2Ht2nBjG9r9+7dSklJUV5enpnhHIsAAggggAACCIRcgIAecmIWQAABBGJLwBvQHQ6HdjZNkSuul2mAjgK6MYnxZHfjy3tV3czExlX07K9XafDAFAK6GTiORQABBBBAAIGwCRDQw0bNQggggEBsCHgD+tv7GtQ796aANm08xX3X6wt1/vW/9bxizfjyXkFPz85X9nnTA5r3Hx8XafLoBAJ6QHoMQgABBBBAAIFQCxDQQy3M/AgggECMCRgBvaSkRPVD58npSAl49+2vlgdzD7q3iJ7uOiV9slQXXnghH3EPuDMMRAABBBBAAIFQCRDQQyXLvAgggECMChgB/ekVL6j/RYuDFjBC+vtrH/XME8xT3E8t5Ohbv9KcH1xOQA+6O0yAAAIIIIAAAlYLENCtFmU+BBBAIMYFjID+H0v+qJwrl9pSonzdffrpnMsI6LbsDkUhgAACCCAQ2wIE9NjuP7tHAAEELBcoKyvTo0+/oRFXPGL53FZMeGjbf2rm+AxNmDDBiumYAwEEEEAAAQQQsEyAgG4ZJRMhgAACCBgCxv3nRdtq9e2xP7IlyOE9a3V+5qeaNWuWLeujKAQQQAABBBCIXQECeuz2np0jgAACIREoKirSug/d+tZ354Rk/mAnrdq3SXkpu3TrrbcGOxXjEUAAAQQQQAABSwUI6JZyMhkCCCCAAAGdcwABBBBAAAEEEAhMgIAemBujEEAAAQQ6EbA6oH9evlVyu3Xm2eMsMecKuiWMTIIAAggggAACIRAgoIcAlSkRQACBWBYgoMdy99k7AggggAACCAQjQEAPRo+xCCCAAAKnCaxbt06rttZY9pA4q6+gf1a2VhcM4SFxnLoIIIAAAgggYD8BArr9ekJFCCCAQEQL7NmzR7/5r9cte83a5+Xb5HY7lXH2hZa4GK9Zu2FCpsaPH2/JfEyCAAIIIIAAAghYJUBAt0qSeRBAAAEEPAIHDhzQb5Y+r+wrllgiYnVAr1j/a90x+1Ll5eVZUh+TIIAAAggggAACVgkQ0K2SZB4EEEAAgdaA/vSKF9T/osWWiFgd0I+9/SvNnnE5Ad2S7jAJAggggAACCFgpQEC3UpO5EEAAAQQ8V9BLSkpUP/R2OR3JQYtYGdB7uOrU59AyjRs3joAedGeYAAEEEEAAAQSsFiCgWy3KfAgggECMCxgBvbKyUm/va1Dv3JuC1jhS8a5czmZlDLso6LlqDqzWlaN6KSUlhYAetCYTIIAAAggggIDVAgR0q0WZDwEEEIhxAW9Adzgc2tk0Ra64XkGJWBXQHWpWVuNKDR6YQkAPqiMMRgABBBBAAIFQCRDQQyXLvAgggECMCngDekFBgeb/fp1Sc6cFJWFVQG88vE2/+MFQ7dq1i4AeVEcYjAACCCCAAAKhEiCgh0qWeRFAAIEYFTg1oG/Y9I521o0L6l70I5WlcrZ8rcxhFwcsGu9u0gj3q7pmyuXasmULAT1gSQYigAACCCCAQCgFCOih1GVuBCJY4MMPP1RDQ0PAOzhx4oTq6upav91ut/r27dv6nZqaqvj4+IDmNz46PWbMmIDGMij0AqcGdGO1Zc+sUk3GnIAXtiKgOz5ZoXvmXe+pgYAecCsYiAACCCCAAAIhFiCghxiY6RGIRAEjYG3cuFGjRo0yVX5FRYU+qvhM1XWJcvQ+Qz0S0xTfK0lOR5pnHofzhNzNjWpuqpezrkoDE+s0PDtTw4YNM7VOWVmZRo8ezUO+TKmF7+D2Ad1YecHvXlXKiB8GVESwAb3u4Do9+OPRSkhIIKAH1AEGIYAAAggggEC4BAjo4ZJmHQQiSKCjgNVV+S8XvabtFS0akDNRroR0Uzt1NFXr2MclOvesXpo1/Qq/rqpzBdQUcdgP7uj8qamp0eLVh+UYdJ7peo5UbpezuVGZueY/4u6qqdBPJvbQgAEDWtfl/DHdAgYggAACCCCAQJgECOhhgmYZBCJJwN+A/tZbb2ntzkalDbtKTvUMaovGE7a/3F+s8d9JUMHES7qci4AVFHXIB3d2/hw7dkxL1nyupMwLTNUQaEBvrt6uGy9OUFZWVpv1OH9M8XMwAggggAACCIRRgIAeRmyWQiBSBPwJ6L975g21DC6Q05Fi6bZ6uGrV8rc1unPuJCUlJXU4NwHLUnLLJ+vq/Pnqq690/5Mb1O+cWX6vG0hAr//0bf3sugydccYZp63D+eM3PQcigAACCCCAQJgFCOhhBmc5BCJBoKuAZTz47f6nNiht5I2mttJY96U2F96qcwvmKz1rrM+xDZ+9o3lXDVZ6+ukfmSdg+eTr1gP8+QueRU+vUdOZ18jVw/df8JgJ6A5nrdxVxZ6/4PHec94eg/OnW08PFkcAAQQQQACBLgQI6JweCCBwmkBnAevo0aNaVnxEiRnmPqJsLLD7zUV6f+2jmvzzN/wK6MaYlqPbNevCXsrOzm5TIwHL3ietPwHd2MHWrVv16nsNSs2Z3OUtEtWf7FDL118pc3jntz4Yt0h8sb9YE8/trYkTLuwSiPPH3ucP1SGAAAIIIBDLAgT0WO4+e0egE4HOH/L1mRyDvmvazbgCuvvN36mh5pjOn7HQ74BuLOSuqdBtl8Zr0KBBresSsEy3IKwD/A3o3qJWrl6r9ypdSs26VK6EwafV2lVAj/+6Wl8cWKe8rATPQwb9+eL88UeJYxBAAAEEEECgOwQI6N2hzpoI2Fygo4B118JiU/cNe7d4srpc7668R3kFd+mvby7y+yPupxLVH1qv++fmKTEx0fNjApa9TyDj/Nm0aZPp1+AdPHhQe8s/VXVtouISB6ln7/6K75Go48eOyNnUqMGZQ+VqaVRLwwm5G49pYO96Dc/KVE5OjikQXtNniouDEUAAAQQQQCCMAgT0MGKzFAKRItA+oC9dvlK1mT8yXX5LU4NKi+5Vena+hgyfYOoe9PaLxVc+q1/ePoOAbroL3TPggw8+UGNjY8CLnzx5UvX19aqtrfV8G199+vRRcnKy57tfv36Ki4sLaH6Hw6ExY8YENJZBCCCAAAIIIIBAKAUI6KHUZW4EIlTg1IC+YdM7er9+nFrik03vpuK9lTpSUar8qY/ICOtmHhJ3WkB3N2m4q1jXXjWJK+imO8EABBBAAAEEEEAAgUgQIKBHQpeoEYEwC3gD+qRJk3TX4+uVmjvNdAXej7Z/b/qjSh2cI7NPce9owcbD27Rgxre1e/dupaSkmP4ItelNMAABBBBAAAEEEEAAgTAKENDDiM1SCESKgDegGx8F3tk0Ra64XqZLN66eby68rcNxoycb96TPNz1nvLtJ2V+v0uCBKQR003oMQAABBBBAAAEEELC7AAHd7h2iPgS6QcAb0N/e16DeuTdZUoEVV9CNQv7xcZEmj04goFvSFSZBAAEEEEAAAQQQsJMAAd1O3aAWBGwiYAT0kpIS1Q+dJ6cjxZKqrAroPd11SvpkqS688EI+4m5JZ5gEAQQQQAABBBBAwC4CBHS7dII6ELCRgBHQn17xgvpftNiyqqwK6EZBR9/6leb84HICumXdYSIEEEAAAQQQQAABOwgQ0O3QBWpAwGYCRkD/jyV/VM6VS21W2TfllK+7Tz+dcxkB3ZbdoSgEEEAAAQQQQACBQAUI6IHKMQ6BKBYoKyvTo0+/oRFXPGLLXR7a9p+aOT5DEyZMsGV9FIUAAggggAACCCCAQCACBPRA1BiDQJQLGPefF22r1bfH/siWOz28Z63Oz/xUs2bNsmV9FIUAAggggAACCCCAQCACBPRA1BiDQJQLFBUVad2Hbn3ru3NsudOqfZuUl7JLt956qy3roygEEEAAAQQQQAABBAIRIKAHosYYBKJcgIAe5Q1mewgggAACCCCAAAK2FCCg27ItFIVA9wpYHdA/L98qud068+xxlmyMK+iWMDIJAggggAACCCCAgM0ECOg2awjlIGAHAQK6HbpADQgggAACCCCAAAKxJkBAj7WOs18E/BBYt26dVm2tsewhcVZfQf+sbK0uGMJD4vxoJYcggAACCCCAAAIIRJAAAT2CmkWpCIRLYM+ePfrNf71u2WvWPi/fJrfbqYyzL7RkC8Zr1m6YkKnx48dbMh+TIIAAAggggAACCCBgBwECuh26QA0I2EzgwIED+s3S55V9xRJLKrM6oFes/7XumH2p8vLyLKmPSRBAAAEEEEAAAQQQsIMAAd0OXaAGBGwmYAT0p1e8oP4XLbakMqsD+rG3f6XZMy4noFvSHSZBAAEEEEAAAQQQsIsAAd0unaAOBGwkYAT0kpIS1Q+9XU5HctCVWRnQe7jq1OfQMo0bN46AHnRnmAABBBBAAAEEEEDATgIEdDt1g1oQsImAEdArKyv19r4G9c69KeiqjlS8K5ezWRnDLgp6rpoDq3XlqF5KSUkhoAetyQQIIIAAAggggAACdhIgoNupG9SCgE0EvAHd4XBoZ9MUueJ6BVWZVQHdoWZlNa7U4IEpBPSgOsJgBBBAAAEEEEAAATsKENDt2BVqQqCbBbwBvaCgQPN/v06pudOCqsiqgN54eJt+8YOh2rVrFwE9qI4wGAEEEEAAAQQQQMCOAgR0O3aFmhDoZoFTA/qGTe9oZ924oO5FP1JZKmfL18ocdnHAO4t3N2mE+1VdM+VybdmyhYAesCQDEUAAAQQQQAABBOwqQEC3a2eoC4FuFDg1oBtlLHtmlWoy5gRckRUB3fHJCt0z73pPDQT0gFvBQAQQQAABBBBAAAEbCxDQbdwcSkOguwTaB3SjjgW/e1UpI34YUEnBBvS6g+v04I9HKyEhgYAeUAcYhAACCCCAAAIIIBAJAgT0SOgSNSIQZoGOAnpNTY0Wrz4sx6DzTFdzpHK7nM2Nysw1/xF3V02FfjKxhwYMGNC6LlfQTbeAAQgggAACCCCAAAIRIEBAj4AmUSIC4RboKKAbNRw7dkxL1nyupMwLTJUUaEBvrt6uGy9OUFZWVpv1COim+DkYAQQQQAABBBBAIEIECOgR0ijKRCCcAp0FdKOGr776Svc/uUH9zpnld0mBBPT6T9/Wz67L0BlnnHHaOgR0v+k5EAEEEEAAAQQQQCCCBAjoEdQsSkUgXAJdBXRvDYueXqOmM6+Rq0eKz7LMBHSHs1buqmLdOXdS6z3n7RcgoPsk5wAEEEAAAQQQQACBCBQgoEdg0ygZgVAL+BPQjRq2bt2qV99rUGrOZDnVs9Oyqj/ZoZavv1Lm8Es6PcahZn2xv1gTz+2tiRMu7HKLBPRQnwHMjwACCCCAAAIIINAdAgT07lBnTQRsLuBvQPduY+XqtXqv0qXUrEvlShh82u66CujxX1friwPrlJeVoFnTr/BLhoDuFxMHIYAAAggggAACCESYAAE9whpGuQiEQ8AI6Js2bVJeXp6p5Q4ePKi95Z+qujZRcYmD1LN3f8X3SNTxY0fkbGrU4MyhcrU0qqXhhNyNxzSwd72GZ2UqJyfH1DplZWUaPXq06fpMLcLBCCCAAAIIIIAAAgiEWYCAHmZwlkMgUgQ++OADNTY2BlzuyZMnVV9fr9raWs+38dWnTx8lJyd7vvv166e4uLiA5nc4HBozZkxAYxmEAAIIIIAAAggggIBdBQjodu0MdSGAAAIIIIAAAggggAACCMSUAAE9ptrNZhFAAAEEEEAAAQQQQAABBOwqQEC3a2eoCwEEEEAAAQQQQAABBBBAIKYECOgx1W42iwACCCCAAAIIIIAAAgggYFcBArpdO0NdCD2wepAAACAASURBVCCAAAIIIIAAAggggAACMSVAQI+pdrNZBBBAAAEEEEAAAQQQQAABuwoQ0O3aGeqKeIGdO3faeg+8pszW7aE4BBBAAAEEEEAAgRgUIKDHYNPZcugFduzYobKyMuXm5lqy2HMv/dkzz5wZl1oy3/79+zVy5EiNHTvWkvmYBAEEEEAAAQQQQAABBIIXIKAHb8gMCJwmUFpa6vlZfn5+0Dqlpdv1lyN5nnm+n75b+fnBh2or6wt6g0yAAAIIIIAAAggggAACHgECOicCAiEQsDIA3/37teqbO9NTZd3+F/XYnZODrtjK+oIuhgkQQAABBBBAAAEEEECAgM45gECoBKwKwEXFJfrYcY1ccT09pca7mzXM+YqmXj0pqNKtqi+oIhiMAAIIIIAAAggggAACbQS4gs4JgUAIBKwIwLW1tXrsTweUNOSSNhU2VG3W3TecreTk5IArt6K+gBdnIAIIIIAAAggggAACCHQoQEDnxEAgBAJWBOCnVqzSifTZxp0o7Sp0K+1IoX4yd1rAlVtRX8CLMxABBBBAAAEEEEAAAQQI6JwDCIRLINgAXF5erpffT5Y7Oafjf3Fry3X96Frl5HT8e1/7DLY+X/PzewQQQAABBBBAAAEEEDAvwBV082aMQMCnQLAB+MGlq+TInuNZZ/ebi/T+2kc9/zxk+HhdMvu/ldi3v5wVz+n+OwK7ih5sfT4BOAABBBBAAAEEEEAAAQRMCxDQTZMxAAHfAsEE4C1vbdW2kxfI6UhWxXsrVbH95dZQboT1+pOfK3/qI0pwtOj81K26+KILfBfU7ohg6jO9GAMQQAABBBBAAAEEEEDALwECul9MHISAOYFgAvBdi95Qv+Ez1NLUoNKie5Wena/s86Z7Cmis+1KbC2/VuQXzlZ41Vv/46CX9bv4V5oqTFEx9phdjAAIIIIAAAggggAACCPglQED3i4mDEDAnEGgAfnHlazrYe7pc6ulXQI9Xs876aqVmTp9iqsBA6zO1CAcjgAACCCCAAAIIIICAKQECuikuDkbAP4FAAvDx48e1rLhavdLzWxdp/xH39v/fOLDpSKluv3qwBg4c6F9xXEH324kDEUAAAQQQQAABBBAIpwABPZzarBUzAoEE9MXLi1SfabxWre2XEco3F97m+WHuuNme+8979Epqc1Cfzwr1s1um+u0bSH1+T86BCCCAAAIIIIAAAgggEJAAAT0gNgYh0LWA2QC8d+9eFX80RK6kIa0Te+9B75N6pvIK5nt+fqRyu9Y+foUm//wNzz3o3q/4hipdPbxK55xzjl+tMVufX5NyEAIIIIAAAggggAACCAQlQEAPio/BCHQsYDYA3/d4kRKGtb16boTxv765qPUJ7t6VjCe5G1/e0O79+dcfF+rhn/t3Fd1sffQZAQQQQAABBBBAAAEEQi9AQA+9MSvEoICZALx+wybtapyglvi+baTMBvQerjqNStyoiZeN9ylupj6fk3EAAggggAACCCCAAAIIWCJAQLeEkUkQaCvgbwB2uVxasHiDUnOnnUZo5iPu3sEn96/Swp9dpvj4+C5b4m999BUBBBBAAAEEEEAAAQTCJ0BAD581K8WQgL8B+A9/KlZVv5lyy9Ghjjek73+n0PP7/pkjNX7us0odnNPh8XFyasg/XtRNN1xNQI+h842tIoAAAggggAACCESHAAE9OvrILmwm4E9AP3z4sJ7ZUC/HwFGWVu88vks/vqyPMjIyOp3Xn/osLYrJEEAAAQQQQAABBBBAwKcAAd0nEQcgYF7AnwC88MkX1XTWLeYn92NEr4PLteDfZxLQ/bDiEAQQQAABBBBAAAEE7CJAQLdLJ6gjqgR8BfRdu3Zp3aEcORM6v8odDIjj68O6fGi5Ro3q+Oq8r/qCWZuxCCCAAAIIIIAAAgggEJgAAT0wN0Yh0KWArwB8z6Ii9Rne9rVqVpPWf1SoR+d3/No1X/VZXQvzIYAAAggggAACCCCAgG8BArpvI45AwLRAVwH4tdfXa4/7SjnjEk3Pa2aAw92okXGva8qVE08bRkA3I8mxCCCAAAIIIIAAAgiER4CAHh5nVokxgc4CcGNjox5Yvl19syaHRaSucq0euGWsEhPb/mUAAT0s/CyCAAIIIIAAAggggIApAQK6KS4ORsA/gc4C8PLClTo2aLbc6vo95f6t4vuoOLk06Fihbpk9vc3BBHTfdhyBAAIIIIAAAggggEC4BQjo4RZnvZgQ6CgAHzp0SC+845LS/jW8Bic+0Kxx8Ro6dGjrugT08LaA1RBAAAEEEEAAAQQQ8EeAgO6PEscgYFKgowD8yNKXpOybTc5k0eEVz+reO2YQ0C3iZBoEEEAAAQQQQAABBEIhQEAPhSpzxrxA+4D+7rul2lw9Ss6eA7rFxtH8hS4ZvEvf+16+Z32uoHdLG1gUAQQQQAABBBBAAIEuBQjonCAIhECgfQBesHC1Us65KQQr+T9lzd4/aOGC6wjo/pNxJAIIIIAAAggggAACYRUgoIeVm8ViReDUgL5qzWsq73ldyF+r5svWeO1aTvNqTbt2ClfQfWHxewQQQAABBBBAAAEEukGAgN4N6CwZ/QLegD5ixAj99vkPlTS0wBabbjj0pn7xb/+iffv2eerJz//mI+98IYAAAggggAACCCCAQPcLENC7vwdUEIUC3oD+XtnfVZMxJ2yvVfNFabx2LeXwczrvO98ioPvC4vcIIIAAAggggAACCIRZgIAeZnCWiw0BI6BXVVXp45Zxcifn2GrTcbXlGtbjHQ0ZMoQr6LbqDMUggAAC1grs3LnT2gktnm3MmDEWz8h0CCCAQOQLENAjv4fswIYCRkAvfHmjhkx4zIbVSVUb79bs6ycQ0G3ZHYpCAAEEghfYsWOHysrKlJubG/xkkp576c+eeebMuNSS+fbv36+RI0dq7NixlszHJAgggEC0CBDQo6WT7MNWAiUlJVpWuE6p6Wfbqi5vMSerD2jejRNVUGCPe+NtiURRCCCAQAQLWPk6zdLS7frLkTyPxvfTdys/P/hQbWV9EdwmSkcAAQROEyCgc1IgECKBPXv2hGhma6Y1rlzwhQACCCAQnQJWBuC7f79WfXNneqDq9r+ox+6cHDSalfUFXQwTIIAAAjYSIKDbqBmUggACCCCAAAIIWCFgVQAuKi7Rx45r5Irr6Skr3t2sYc5XNPXqSUGVaVV9QRXBYAQQQMCGAgR0GzaFkhBAAAEEEEAAgWAErAjAtbW1euxPB5Q05JI2pTRUbdbdN5yt5OTkgEu0or6AF2cgAgggYGMBArqNm0NpCCCAAAIIIIBAIAJWBOCnVqzSifTZkuLaleBW2pFC/WTutEBK84yxor6AF2cgAgggYGMBArqNm0NpCCCAAAIIIIBAIALBBuDy8nK9/H5yp68KNV7Zef3oWuXkBPYq0WDrC8SEMQgggEAkCBDQI6FL1IgAAggggAACCJgQCDYAP7h0lRzZc9qsWPHeStUe/5vyCuZ7fu6seE733zFNxvvWp03759X0VatWydc7zoOtzwQFhyKAAAIRJUBAj6h2USwCCCCAAAIIIOBbIJgAvOWtrdp28gI5Hf+8x9wI55sLb9Poyfe0BnSHs1ZnNazUH//wnB566CFPKDfC+q9//Ws98cQTysrK6rTQYOrzvXuOQAABBCJXgIAeub2jcgQQQAABBBBAoEOBYALwXYveUL/hMzzztjQ1qLToXh09uFNJKYOUnpXfGtCN37/7x5t0+QVn6/bbb2+tY9myZZ5/PvVn7YsMpj5ajgACCESzAAE9mrvL3hBAAAEEEEAgJgUCDcAvrnxNB3tPl0vfvFbtSOV2Vex4WflTH1HZxqc8P/N+xN0I79uLfql/+f+k3z76UKuzcRV9zZo1uu+++5SYmGj5XyDEZEPZNAIIxIwAAT1mWs1GEUAAAQQQQCBWBAIJ6MePH9ey4mr1Ss/vkGn3m4vaBPTGui+1ufBWjRxboEf+/fsaOHCg5/dGQDc+4r5kyRKlpaUR0GPlpGOfCCBgiQAB3RJGJkEAAQQQQAABBOwjEEhAX7y8SPWZxmvVOv7qLKCfWzBfWYkf6We3TCWg2+cUoBIEEIhQAQJ6hDaOshFAAAEEEEAAgc4EzAb0vXv3qvijIXIlDQkooGdkZOrq4VU655xzuILOaYkAAggEIUBADwKPoQgggAACCCCAgB0FzAb0+x4vUsKwzq+eG3tsfwXd+wC59Ox8ZZ83XV9/XKiHfz7VE9C5B92OZwU1IYBAJAgQ0COhS9SIAAIIIIAAAgiYEDAT0Ndv2KRdjRPUEt+3yxXaB/T2ob2Hq06jEjdq/0d7PPPwFHcTDeNQBBBA4H8FCOicCggggAACCCCAQJQJ+BvQXS6XFizeoNTcaT4FOgroJ6vLtWnFzTp/xkKlZ41VxabHVL1vrZ588kneg+5TlAMQQACB0wUI6JwVCCCAAAIIIIBAlAn4G9D/8KdiVfWbKbccPgU6CujGIONVbGsfv6J1/Nxb79B99/ysy/n8rc9nURyAAAIIRJkAAT3KGsp2EEAAAQQQQAABfwLw4cOH9cyGejkGjrIUzHl8l358WR9lZGR0Oq8/9VlaFJMhgAACESJAQI+QRlEmAggggAACCCDgr4A/AXjhky+q6axb/J3S1HG9Di7Xgn+fSUA3pcbBCCCAgERA5yxAAAEEEEAAAQSiTMBXQN+1a5fWHcqRM6Hzq9zBkDi+PqzLh5Zr1KiOr877qi+YtRmLAAIIRLIAAT2Su0ftCCCAAAIIIIBABwK+AvA9i4rUZ3jXr1ULFrb+o0I9On9qh9P4qi/YtRmPAAIIRKoAAT1SO0fdCCCAAAIIIIBAJwJdBeDXXl+vPe4r5YxLDKmfw92okXGva8qVE09bh4AeUnomRwCBCBYgoEdw8ygdAQQQQAABBBDoSKCzANzY2KgHlm9X36zJYYGrq1yrB24Zq8TEtn8ZQEAPCz+LIIBABAoQ0COwaZSMAAIIIIAAAgh0JdBZAF5euFLHBs2WW/FhAYyTS4OOFeqW2dPbrEdADws/iyCAQAQKENAjsGmUjAACCCCAAAIImA3ohw4d0gvvuKS0fw0v3okPNGtcvIYOHdq6LgE9vC1gNQQQiBwBAnrk9IpKEUAAAQQQQAABvwQ6CsCPLH1Jyr7Zr/GWH1TxrO69YwYB3XJYJkQAgWgTIKBHW0fZDwIIIIAAAgjEvED7gP7uu6XaXD1Kzp4DusXG0fyFLhm8S9/7Xr5nfa6gd0sbWBQBBCJAgIAeAU2iRAQQQAABBBBAwIxA+wC8YOFqpZxzk5kpLD+2Zu8ftHDBdQR0y2WZEAEEokmAgB5N3WQvCCCAAAIIIIBAuyvUq9a8pvKe14X8tWq+4I3XruU0r9a0a6dwBd0XFr9HAIGYFSCgx2zr2TgCCCCAAAIIRKuA9wr6iBEj9NvnP1TS0AJbbLXh0Jv6xb/9i/bt2+epJz//m4+884UAAggg8I0AAZ0zAQEEEEAAAQQQiDIBb0B/r+zvqsmYE7bXqvliNF67lnL4OZ33nW8R0H1h8XsEEIhJAQJ6TLadTSOAAAIIIIBANAsYAb2qqkoft4yTOznHVluNqy3XsB7vaMiQIVxBt1VnKAYBBOwgQEC3QxeoAQEEEEAAAQQQsFDACOiFL2/UkAmPWTirdVNVbbxbs6+fQEC3jpSZEEAgSgQI6FHSSLaBAAIIIIAAAgh4BUpKSrSscJ1S08+2JcrJ6gOad+NEFRTY4954WyJRFAIIxKQAAT0m286mEUAAAQQQQCDaBfbs2WPrLY4cOdLW9VEcAggg0B0CBPTuUGdNBBBAAAEEEEAAAQQQQAABBNoJENA5JRBAAAEEEEAAAQQQQAABBBCwgQAB3QZNoAQEEEAAAQQQQAABBBBAAAEECOicAwgggAACCCCAAAIIIIAAAgjYQICAboMmUAICCCCAAAIIBCfw4YcfqqGhIeBJTpw4obq6utZvt9utvn37tn6npqYqPj4+oPkdDofGjBkT0FgGIYAAAgjElgABPbb6zW4RQAABBBCIOoEDBw5o48aNGjVqlKm9VVRU6KOKz1RdlyhH7zPUIzFN8b2S5HSkeeZxOE/I3dyo5qZ6OeuqNDCxTsOzMzVs2DBT65SVlWn06NHKy8szNY6DEUAAAQRiT4CAHns9Z8cIIIAAAghElYAR0CsrK/1+p/bLRa9pe0WLBuRMlCsh3ZSFo6laxz4u0bln9dKs6Vf4dVV9y5YtSklJIaCbkuZgBBBAIDYFCOix2Xd2jQACCCCAQNQI+BvQ33rrLa3d2ai0YVfJqZ5B7d+hZn25v1jjv5OggomXdDkXAT0oagYjgAACMSVAQI+pdrNZBBBAAAEEok/An4D+u2feUMvgAjkdKZYC9HDVquVva3Tn3ElKSkrqcG4CuqXkTIYAAghEtQABParby+YQQAABBBCIfoGuArrx4Lf7n9qgtJE3dglxpHK71j5+RYfHjJ58j/IK5nc5vuGzdzTvqsFKTz/9I/ME9Og/B9khAgggYJUAAd0qSeZBAAEEEEAAgW4R6CygHz16VMuKjygx44KA6jJC+7aXFmj83GeVOjjH5xwtR7dr1oW9lJ2d3eZYArpPOg5AAAEEEPhfAQI6pwICCCCAAAIIRLRARwG9pqZGi1d/Jseg7wa0t8a6L7W58FZlj71e2edN93sOd02Fbrs0XoMGDWodQ0D3m48DEUAAgZgXIKDH/CkAAAIIIIAAApEt0FFAv2thsfqdMyvgje1+c5HqT36u/KmPqEevju8t72zy+kPrdf/cPCUmJnoOIaAH3AYGIoAAAjEnQECPuZazYQQQQAABBKJLoH1AX7p8pWozfxTwJk9Wl2vTipt1/oyFSs8aG9A88ZXP6pe3zyCgB6THIAQQQCB2BQjosdt7do4AAggggEBUCJwa0Ddsekfv149TS3xywHureG+ljlSUBnT13LtovLtJw13FuvaqSVxBD7gTDEQAAQRiT4CAHns9Z8cIIIAAAghElYA3oE+aNEl3Pb5eqbnTAt5fS1ODSovuVXp2vql7zztasPHwNi2Y8W3t3r1bKSkpysvLC7guBiKAAAIIxIYAAT02+swuEUAAAQQQiFoBb0B3OBza2TRFrrheAe/V+Hj7uyvv0femP+rXk9u7Wsi4ip799SoNHphCQA+4IwxEAAEEYkuAgB5b/Wa3CCCAAAIIRJ2AN6C/va9BvXNvCmp/xqvV/vrmIl0y+7+V2Ld/UHMZg//xcZEmj04goActyQQIIIBAbAgQ0GOjz+wSAQQQQACBqBUwAnpJSYnqh86T05ES1D6tuP/81AJ6uuuU9MlSXXjhhXzEPajOMBgBBBCIDQECemz0mV0igAACCCAQtQJGQH96xQvqf9HioPdovF7N+MormB/0XN4Jjr71K835weUEdMtEmQgBBBCIXgECevT2lp0hgAACCCAQEwJGQP+PJX9UzpVLbbnf8nX36adzLiOg27I7FIUAAgjYS4CAbq9+UA0CCCCAAAIImBQoKyvTo0+/oRFXPGJyZHgOP7TtPzVzfIYmTJgQngVZBQEEEEAgYgUI6BHbOgpHAAEEEEAAAUPAuP+8aFutvj32R7YEObxnrc7P/FSzZs2yZX0UhQACCCBgHwECun16QSUIIIAAAgggEIBAUVGR1n3o1re+OyeA0aEfUrVvk/JSdunWW28N/WKsgAACCCAQ0QIE9IhuH8UjgAACCCCAAAGdcwABBBBAIFoECOjR0kn2gQACCHSTwIcffqiGhoaAVz9x4oTq6upav91ut/r27dv6nZqaqvj4+IDmdzgcGjNmTEBjGRQ5AlYH9M/Lt0put848e5wlCFxBt4SRSRBAAIGYECCgx0Sb2SQCCCAQGgHj6dkbN27UqFGjTC1QUVGhjyo+U3Vdohy9z1CPxDTF90qS05HmmcfhPCF3c6Oam+rlrKvSwMQ6Dc/O1LBhw0ytYzw8bPTo0Tw925Ra5B1MQI+8nlExAggggEDHAgR0zgwEEEAAgYAFjIBeWVmpgoICv+Z4ueg1ba9o0YCciXIlpPs1xnuQo6laxz4u0bln9dKs6Vf4dVV9y5YtSklJIaCbko68g9etW6dVW2sse0ic1VfQPytbqwuG8JC4yDuzqBgBBBAIvwABPfzmrIgAAghEjYC/Af2tt97S2p2NSht2lZzqGdT+HWrWl/uLNf47CSqYeEmXcxHQg6KOmMF79uzRb/7rdctes/Z5+Ta53U5lnH2hJQbGa9ZumJCp8ePHWzIfkyCAAAIIRK8AAT16e8vOEEAAgZAL+BPQf/fMG2oZXCCnI8XSenq4atXytzW6c+4kJSUldTg3Ad1ScttOZpyHv1n6vLKvWGJJjVYH9Ir1v9Ydsy/lkxyWdIdJEEAAgegWIKBHd3/ZHQIIIBBSga4CuvHgt/uf2qC0kTf6rOFkdbk2rbhZX362p/XY/pkjNX7us0odnNPl+IbP3tG8qwYrPf30j8wT0H3SR8UBxnn49IoX1P+ixZbsx+qAfuztX2n2jMsJ6Ca7s3PnTpMjwns4D6AMrzerIRArAgT0WOk0+0QAAQRCINBZQD969KiWFR9RYsYFfq16pHK7/vrmIl0y+7+V2Le/X2NOPajl6HbNurCXsrOz24wloJumjMgBxnlYUlKi+qG3y+lIDnoPVgb0Hq469Tm0TOPGjSOgm+jMjh07ZDzkMTc318Sozg997qU/e345Z8allsy3f/9+jRw5UmPHjrVkPiZBAAEEvAIEdM4FBBBAAIGABToK6DU1NVq8+jM5Bn3X73kr3lupIxWlyp/6iHr06vjj6r4mc9dU6LZL4zVo0KDWQwnovtSi4/fe8/DtfQ3qnXtT0Js6UvGuXM5mZQy7KOi5ag6s1pWjevGwQpOSpaWlnhH5+fkmR55+eGnpdv3lSJ7nF99P3638/OBDtZX1Bb1BJkAAgagSIKBHVTvZDAIIIBBegY4C+l0Li9XvnFmmCtn95iLP8XkF802Na39w/aH1un9unhITEz2/IqAHxRkxg73nofHe+51NU+SK6xVU7VYFdOOBhlmNKzV4YAoB3WRHrAzAd/9+rfrmzvRUULf/RT1252ST1XQU+q37C4Sgi2ECBBCIKgECelS1k80ggAAC4RVoH9CXLl+p2swfmSqipalBpUX3av87ha3j/L3/vKOF4iuf1S9vn0FAN9WFyD741PNw/u/XKTV3WlAbsiqgNx7epl/8YKh27dpFQDfZEasCelFxiT52XCNX3Ddvj4h3N2uY8xVNvXqSyYraHm5VfUEVwWAEEIhKAQJ6VLaVTSGAAALhETg1GG3Y9I7erx+nlnhz9wA31n2pzYW3anDW2NYr6MY96dteWuDXQ+La7zTe3aThrmJde9UkrqCH5zTo9lXan4c768YFdS/6kcpSOVu+VuawiwPem3EejnC/qmumXM55GICiFQG4trZWj/3pgJKGtH0dY0PVZt19w9lKTjb3Z9Wp27CivgBYGIIAAjEgQECPgSazRQQQQCBUAt5gNGnSJN31+Pqgr1x66/ReVe+TemZAH3s3rlwumPFt7d69myuXoWq+jeZt/0mOZc+sUk3GnIArtCKgOz5ZoXvmXe+pgVstzLfCigD81IpVOpE+W1JcuwLcSjtSqJ/MDfyTFlbUZ16FEQggEAsCBPRY6DJ7RAABBEIkYPW9v6eWGcx96cbVy+yvV3Hvb4j6brdpO3oWwoLfvaqUET8MqNRgA3rdwXV68MejlZCQQEAPqANSsAG4vLxcL7+fLHdyx69pjKst1/Wja5WT0/VrHDsrP9j6AmRhGAIIxIAAAT0GmswWEUAAgVAJWPH0bOMd6O+uvEffm/5o6zvPvVfQ07PzlX3e9IDK/8fHRZo8OoEr6AHpRdagzt8mcFiOQeeZ3oxxi4WzuVGZueY/4u6qqdBPJvbQgAEDWtflCrrpFgQd0B9cukqO7LafojDeFlF7/G+tn8pxVjyn++/45ip6ZWWllixZooceekhpaWk+Cyag+yTiAAQQCFCAgB4gHMMQQAABBKR/vn96npyOlIBIOvo4u/Ef0hXbXw74vehGIT3ddUr6ZKkuvPBC3j8dUGciZ1BHAd2o/tixY1qy5nMlZV5gajOBBvTm6u268eIEZWVltVmPgG6K33NwMAF4y1tbte3kBW2eQ2D8mbK58DaNnnxPa0B3OGt1fupWDclM17x58zyvaDRCOgHdfL8YgQAC1gkQ0K2zZCYEEEAg5gSMYPT0ihfU/6LFQe29/ZPchwwfH1Q49xZz9K1fac4PLiegB9Ud+w/uLKAblX/11Ve6/8kNpl79F0hAr//0bf3sugydccYZp4ER0M2fQ8EE9LsWvaF+w795k4P3z5ajB3cqKWWQ0rPy2zzX4sNX7tSODYWaMmWKampqCOjmW8UIBBCwWICAbjEo0yGAAAKxJGAEo/9Y8kflXLnUltsuX3effjrnMgK6LbtjXVFdBXTvKoueXqOmM6+Rq4fvT3qYCejGVVh3VbHunDup9Z7z9jsjoJvvdaAB/cWVr+lg7+ly6ZvXqhm9rNjxsvKnPqKyjU95fpZXMN/zv8YbJN59+S5dPX6kzh97rp544gkCuvlWMQIBBCwWIKBbDMp0CCCAQCwJlJWV6dGn39CIKx6x5bYPbftPzRyfoQkTJtiyPoqyRsCfgG6stHXrVr36XoNScybL+b8BrqMKqj/ZoZavv1Lm8Lav5zr1WIea9cX+Yk08t7cmTriwy40Q0M33OZCAfvz4cS0rrlav9PwOF+zswZNNR0p10bc/1/PPP09AN98qRiCAgMUCBHSLQZkOAQQQiCWBkpISFW2r1bfH/siW2z68Z63Oz/xUs2bNsmV9FGWNgL8B3bvaytVr9V6lS6lZl8qVMPi0IroK6PFfV+uLA+uUl5WgWdOv8GsDBHS/mNocFEhAX7y8SPWZxmvVOv7q6s0Q/yi9X0f/XkZAN98qRiCAgMUCPHoEagAAIABJREFUBHSLQZkOAQQQiCWBoqIirfvQrW99N/B3TofSq2rfJuWl7NKtt94aymWYu5sFjIC+adMm07cyHDx4UHvLP1V1baLiEgepZ+/+iu+RqOPHjsjZ1KjBmUPlamlUS8MJuRuPaWDveg3PyjT9ai7jkyajR482XV83s3br8mYD+t69e1X80RC5koYEFNCP7ntNVe8u04oVK3hIXLd2nsURQICAzjmAAAIIIBCwAAE9YDoGWizwwQcfqLGxMeBZT548qfr6etXW1nq+ja8+ffooOTnZ892vXz/FxcUFNL/D4dCYMWMCGhurg8wG9PseL1LCsM6vnhuOXV1BN+5V37XqZ3q9+P8R0GP1pGPfCNhEgIBuk0ZQBgIIIBCJAlYH9M/Lt0put848e5wlHFxBt4SRSRAIu4CZgL5+wybtapyglvi+XdbpK6B/8OZv9bNbpuq6a6/yuV8z9fmcjAMQQACBUwQI6JwOCCCAAAIBCxDQA6ZjIAIIdCHgbwB2uVxasHiDUnOn+fT0FdD/+uYi5V1wpZb+8lrFx8d3OZ+/9fksigMQQACBdgIEdE4JBBBAAIGABdatW6dVW2sse0ic1VfQPytbqwuG8JC4gBvMQAS6ScDfAPyHPxWrqt9MueXwWak/Af37s/9T2c51uumGqwnoPkU5AAEEQiFAQA+FKnMigAACMSKwZ88e/ea/XrfsNWufl2+T2+1Uxtldv7bKX17jNWs3TMjU+PHj/R3CcQggYAMBfwL64cOH9cyGejkGjrK0YufxXfrxZX2UkZHR6bz+1GdpUUyGAAIxI0BAj5lWs1EEEEDAegHj6dm/Wfq8sq9YYsnkVgf0ivW/1h2zL+Xp2ZZ0h0kQCJ+APwF44ZMvqumsW0JSVK+Dy7Xg32cS0EOiy6QIINCVAAGd8wMBBBBAIGABI6A/veIF9b9occBznDrQ6oB+7O1fafaMywnolnSHSRAIn4CvgL5r1y6tO5QjZ0LnV7mDqdbx9WFdPrRco0Z1fHXeV33BrM1YBBCIbQECemz3n90jgAACQQkYAb2kpET1Q2+X05Ec1FzGYCsDeg9XnfocWqZx48YR0IPuDBMgEF4BXwH4nkVF6jO869eqBVtx/UeFenT+1A6n8VVfsGszHgEEYleAgB67vWfnCCCAQNACRkCvrKzU2/sa1Dv3pqDnO1LxrlzOZmUMuyjouWoOrNaVo3opJSWFgB60JhMgEF6BrgLwa6+v1x73lXLGJYa0KIe7USPjXteUKyeetg4BPaT0TI5ATAsQ0GO6/WweAQQQCE7AG9AdDod2Nk2RK65XUBNaFdAdalZW40oNHphCQA+qIwxGoHsEOgvAjY2NemD5dvXNmhyWwuoq1+qBW8YqMbHtXwYQ0MPCzyIIxKQAAT0m286mEUAAAWsEvAG9oKBA83+/zq93EXe1slUBvfHwNv3iB0Nl3KfKFXRres0sCIRToLMAvLxwpY4Nmi23un5PuVW1xsmlQccKdcvs6W2mJKBbJcw8CCDQXoCAzjmBAAIIIBCwwKkBfcOmd7SzblxQ96IfqSyVs+VrZQ67OOCa4t1NGuF+VddMuVxbtmwhoAcsyUAEuk+gowB86NAhvfCOS0r71/AWduIDzRoXr6FDh7auS0APbwtYDYFYEiCgx1K32SsCCCBgscCpAd2Yetkzq1STMSfgVawI6I5PVuieedd7aiCgB9wKBiLQrQIdBeBHlr4kZd/cPXVVPKt775hBQO8efVZFIKYECOgx1W42iwACCFgr0D6gG7Mv+N2rShnxw4AWCjag1x1cpwd/PFoJCQkE9IA6wCAE7CHQPqC/+26pNlePkrPngG4p0NH8hS4ZvEvf+16+Z32uoHdLG1gUgZgQIKDHRJvZJAIIIBAagY4Cek1NjRavPizHoPNML3qkcruczY3KzDX/EXdXTYV+MrGHBgz453/AcwXddAsYgIAtBNoH4AULVyvlnODfFBHM5mr2/kELF1xHQA8GkbEIIOBTgIDuk4gDEEAAAQQ6E+gooBvHHjt2TEvWfK6kzAtM4QUa0Jurt+vGixOUlZXVZj0Cuil+DkbANgKnBvRVa15Tec/rQv5aNV+bN167ltO8WtOuncIVdF9Y/B4BBAIWIKAHTMdABBBAAIHOAroh89VXX+n+Jzeo3zmz/IYKJKDXf/q2fnZdhs4444zT1iGg+03PgQjYSsAb0EeMGKHfPv+hkoYW2KK+hkNv6hf/9i/at2+fp578/G8+8s4XAgggYJUAAd0qSeZBAAEEYlCgq4Du5Vj09Bo1nXmNXD1SfAqZCegOZ63cVcW6c+6k1nvO2y9AQPdJzgEI2FLAG9DfK/u758GT4Xqtmi8M47VrKYef03nf+RYB3RcWv0cAgYAECOgBsTEIAQQQQMAQ8CegG8dt3bpVr77XoNScyXKqZ6d41Z/sUMvXXylz+CWdHuNQs77YX6yJ5/bWxAkXdtkIAjrnKQKRKWAE9KqqKn3cMk7u5BxbbSKutlzDeryjIUOGcAXdVp2hGASiQ4CAHh19ZBcIIIBAtwj4G9C9xa1cvVbvVbqUmnWpXAmDT6u5q4Ae/3W1vjiwTnlZCZo1/Qq/9ktA94uJgxCwnYAR0Atf3qghEx6zXW1GQVUb79bs6ycQ0G3ZHYpCILIFCOiR3T+qRwABBLpVwAjomzZtUl5enqk6Dh48qL3ln6q6NlFxiYPUs3d/xfdI1PFjR+RsatTgzKFytTSqpeGE3I3HNLB3vYZnZSonx9yVtLKyMo0ePdp0faY2w8EIIGC5QElJiZYVrlNq+tmWz23FhCerD2jejRNVUGCPe+Ot2BNzIICAPQQI6PboA1UggAACESvwwQcfqLGxMeD6T548qfr6etXW1nq+ja8+ffooOTnZ892vXz/FxcUFNL/D4dCYMWMCGssgBBDoXoE9e/Z0bwE+Vh85cqSt66M4BBCITAECemT2jaoRQAABBBBAAAEEEEAAAQSiTICAHmUNZTsIIIAAAggggAACCCCAAAKRKUBAj8y+UTUCCCCAAAIIIIAAAggggECUCRDQo6yhbAcBBBBAAAEEEEAAAQQQQCAyBQjokdk3qkYAAQQQQAABBBBAAAEEEIgyAQJ6lDWU7SCAAAIIIIAAAggggAACCESmAAE9MvtG1QgggAACCCCAAAIIIIAAAlEmQECPsoayHQQQQAABBBBAAAEEEEAAgcgUIKBHZt+oGgEEEEAAAQQQQAABBBBAIMoECOhR1lC2gwACCCCAAAIIIIAAAgggEJkCBPTI7BtVI4AAAggggAACCCCAAAIIRJkAAT3KGsp2EEAAAQQQQAABBBBAAAEEIlOAgB6ZfaNqBBBAAAEEEEAAAQQQQACBKBMgoEdZQ9kOAggggAACCCCAAAIIIIBAZAoQ0COzb1SNAAIIIIAAAggggAACCCAQZQIE9ChrKNtBAAEEEEAAAQQQQAABBBCITAECemT2jaoRQAABBBBAAAEEEEAAAQSiTICAHmUNZTsIIIAAAggggAACCCCAAAKRKUBAj8y+UTUCCCCAAAIIIIAAAggggECUCRDQo6yhbAcBBBBAAAEEEEAAAQQQQCAyBQjokdk3qkYAAQQQQAABBBBAAAEEEIgyAQJ6lDWU7SCAAAIIIIAAAggggAACCESmAAE9MvtG1QgggAACCCCAAAIIIIAAAlEmQECPsoayHQQQQAABBBBAAAEEEEAAgcgUIKBHZt+oGgEEEEAAAQQQQAABBBBAIMoECOhR1lC2gwACCCCAAAIIIIAAAgggEJkCBPTI7BtVI4AAAggggAACCCCAAAIIRJkAAT3KGsp2EEAAAQQQQAABBBBAAAEEIlOAgB6ZfaNqBBBAAAEEEEAAAQQQQACBKBMgoEdZQ9kOAggggAACCCCAAAIIIIBAZAoQ0COzb1SNAAIIIIAAAggggAACCCAQZQIE9ChrKNtBAAEEEEAAAQQQQAABBBCITAECemT2jaoRQAABBBBAAAEEEEAAAQSiTICAHmUNZTsIIIAAAggggAACCCCAAAKRKUBAj8y+UTUCCCCAAAIIIIAAAggggECUCRDQo6yhbAcBBBBAAAEEEEAAAQQQQCAyBQjokdk3qkYAAQQQQAABBBBAAAEEEIgyAQJ6lDWU7SCAAAIIIIAAAggggAACCESmAAE9MvtG1QgggAACCCCAAAIIIIAAAlEmQECPsoayHQQQQAABBBBAAAEEEEAAgcgUIKBHZt+oGgEEEEAAAQQQQEDSzp07be0wZswYW9dHcQggYC8BArq9+kE1CCCAAAIIIIAAAn4K7NixQ2VlZcrNzfVzRNeHPffSnz0HzJlxqSXz7d+/XyNHjtTYsWMtmY9JEEAg+gUI6NHfY3aIAAIIIIAAAghEpUBpaalnX/n5+UHvr7R0u/5yJM8zz/fTdys/P/hQbWV9QW+QCRBAICIECOgR0SaKRAABBBBAAAEEEGgvYGUAvvv3a9U3d6Znibr9L+qxOycHDW5lfUEXwwQIIBARAgT0iGgTRSKAAAIIIIAAAgiEKqAXFZfoY8c1csX19CwR727WMOcrmnr1pKDQCehB8TEYgZgUIKDHZNvZNAIIIIAAAgggEPkCVgTg2tpaPfanA0oackkbkIaqzbr7hrOVnJwcMJQV9QW8OAMRQCAiBQjoEdk2ikYAAQQQQAABBBCwIgA/tWKVTqTPlhTXDtSttCOF+sncaQFDW1FfwIszEAEEIlKAgB6RbaNoBBBAAAEEEEAAgWADcHl5uV5+P1nu5JwOMeNqy3X96Frl5HT8e18dCLY+X/PzewQQiD4BAnr09ZQdIYAAAggggAACMSEQbAB+cOkqObLntLGqeG+lao//TXkF8z0/d1Y8p/vvmKZly5bp8ccfbz121apV8vWO82Dri4kmskkEEGgjQEDnhEAAAQQQQAABBBCISIFgAvCWt7Zq28kL5HT88x5zI5xvLrxNoyff0xrQHc5aHds8X0lJCbrvvvuUmJioyspKzZs3Tw899FCXIT2Y+iKyIRSNAAJBCxDQgyZkAgQQQAABBBBAAIHuEAgmAN+16A31Gz7DU3ZLU4NKi+7V0YM7lZQySOlZ+a0BvbHuS2146mo99XjbMG5cUTe+br/99k63Hkx93eHJmggg0P0CBPTu7wEVIIAAAggggAACCAQgEGgAfnHlazrYe7pc+ua1akcqt6tix8vKn/qIyjY+5fmZ9yPuxj/Hq1lnfbVSM6dPaa2SgB5AwxiCAAI+BQjoPok4AAEEEEAAAQQQQMCOAoEE9OPHj2tZcbV6ped3uKXdby46LaAbP2g6Uqrbrx6sgQMH6sSJE/rpT3+qa6+9Vtdcc02nNIHUZ0dnakIAgfAJENDDZ81KCCCAAAIIIIAAAhYKBBKAFy8vUn2m8Vq1jr86C+jG0X0+K9T/ufFKPfzww57B3nvSO5srkPos5GEqBBCIQAECegQ2jZIRQAABBBBAAAEEJLMBeO/evSr+aIhcSUMCCuiumgp9/tYD+uqrr7RkyRKlpaV12Qaz9dFTBBBAgIDOOYAAAggggAACCCAQkQJmA/B9jxcpYVjnV88NhM6uoHsfJFfz93f1evH/8xnOjbnM1heRTaBoBBCwVICAbiknkyGAAAIIIIAAAgiES8BMAF6/YZN2NU5QS3zfLsvrKKB7w7kxcNy19+i7KVs18bLxPrdppj6fk3EAAgjEhAABPSbazCYRQAABBBBAAIHoE/A3ALtcLi1YvEGpudN8InQU0I2f1Z/83POU9x69knRy/yot/Nllio+P73I+f+vzWRQHIIBAzAgQ0GOm1WwUAQQQQAABBBCILgF/A/Af/lSsqn4z5ZbDJ0D7gH6yulybVtysLz/bc9rYH/7wh10+KM7f+nwWxQEIIBAzAgT0mGk1G0UAAQQQQAABBKJLwJ8AfPjwYT2zoV6OgaMs3bzz+C79+LI+ysjI6HRef+qztCgmQwCBiBcgoEd8C9kAAggggAACCCAQmwL+BOCFT76oprNuCQlQr4PLteDfZxLQQ6LLpAjEpgABPTb7zq4RQAABBBBAAIGIF/AV0Hft2qV1h3LkTOj8KncwCI6vD+vyoeUaNarjq/O+6gtmbcYigEB0ChDQo7Ov7AoBBBBAAAEEEIh6AV8B+J5FReozvOvXqgWLVP9RoR6dP7XDaXzVF+zajEcAgegTIKBHX0/ZEQIIIIAAAgggEBMCXQXg115frz3uK+WMSwyphcPdqJFxr2vKlRNPW4eAHlJ6JkcgKgUI6FHZVjaFAAIIIIBA9Ajs3LnT1psZM2aMreuL5uI6C8CNjY16YPl29c2aHJbt11Wu1QO3jFViYtu/DCCgh4WfRRCIKgECelS1k80ggAACCCAQXQI7duxQWVmZcnNzLdnYcy/92TPPnBmXWjLf/v37NXLkSI0dO9aS+ZjEnEBnAXh54UodGzRbbnX9nnJzq3V+dJxcGnSsULfMnt7mIAK6VcLMg0DsCBDQY6fX7BQBBBBAAIGIE7Ay4JSWbtdfjuR5DL6fvlv5+cGHaivri7jm2KDgjvwPHTqkF95xSWn/Gt4KT3ygWePiNXTo0NZ1OT/C2wJWQyAaBAjo0dBF9oAAAggggECUClgZcO7+/Vr1zf3mlVh1+1/UY3cG//FnK+uL0haGdFsd+T+y9CUp++aQrtvp5BXP6t47ZhDQu0efVRGICgECelS0kU0ggAACCCAQnQJWBeCi4hJ97LhGrrieHqh4d7OGOV/R1KsnBQVnVX1BFRHDg9v7v/tuqTZXj5Kz54BuUXE0f6FLBu/S976X71mf86Nb2sCiCES0AAE9ottH8QgggAACCES3gBUBp7a2Vo/96YCShlzSBquharPuvuFsJScnB4xoRX0BL87A0wLwgoWrlXLOTd0qU7P3D1q44DoCerd2gcURiFwBAnrk9o7KEUAAAQQQiHoBKwLwUytW6US68S7suHZebqUdKdRP5k4L2NGK+gJenIFtAvqqNa+pvOd1IX+tmi9247VrOc2rNe3aKVxB94XF7xFA4DQBAjonBQIIIIAAAgjYViDYAFxeXq6X30+WOzmnwz3G1Zbr+tG1ysnp+Pe+YIKtz9f8/L5rAa//iBEj9NvnP1TS0AJbkDUcelO/+Ld/0b59+zz15Od/85F3vhBAAAFfAgR0X0L8HgEEEEAAAQS6TSDYAPzg0lVyZM9pU3/FeytVe/xvyiuY7/m5s+I53X/HNBnvW5827Zur6Ubge+KJJ5SVldXl3oOtr9tgo2Rhr/97ZX9XTcacsL1WzRef8dq1lMPP6bzvfIuA7guL3yOAQBsBAjonBAIIIIAAAgjYViCYALzlra3advICOR3/vMfcCOebC2/T6Mn3tAZ0h7NWA4/+X61Zvao1lBth3QjoS5YsUVpaWqc+wdRnW/QIKszwr6qq0sct4zr9lER3bcf4dMawHu9oyJAhXEHvriawLgIRKEBAj8CmUTICCCCAAAKxIhBMAL5r0RvqN/ybV161NDWotOheHT24U0kpg5Seld8a0I3fv/vHm/TjmZfqmmuu8Rzf2Niohx9+WNdee63GjBlDQLfpCWecH4Uvb9SQCY/ZssKqjXdr9vUTCOi27A5FIWBPAQK6PftCVQgggAACCCAQxGuqXlz5mg72ni6Xvnmt2pHK7arY8bLypz6iso1PeX7m/Yi78c/xatZZX63UzOlT2gT08847rzW0d9SQYP4CgQYHL1BSUqJlheuUmn528JOFYIaT1Qc078aJKiiwx73xIdgiUyKAgMUCBHSLQZkOAQQQQAABBKwTCCQAHz9+XMuKq9UrveMHc+1+c9FpAd34QdORUt1+9WANHDhQr7zyitasWcNH3K1rZchm2rNnT8jmtmLikSNHWjENcyCAQIwIENBjpNFsM7YFjHsp7fzV1cdH7Vw3tSGAQOgFAgnoi5cXqT7TeK1ax1+dBXTj6H+U3q+Vzz/pGWjcf+79yHtncwVSX+jVWAEBBBBAIFIFCOiR2jnqRsBPgR07dqisrEy5ubl+juj6sOde+rPngDkzLrVkvv3798u4ujB27FhL5mMSBBCILgGzAXjv3r0q/miIXElDAgro8Q1Vunp4lefp7cY96IMHD9btt9/e6Vxm64uu7rAbBBBAAAGrBQjoVosyHwI2E7DyPx5LS7frL0fyPDv8fvpu5ecHH6qtrM9m9JSDAAIWCJj9M+K+x4uUMKzzq+dGSV1dQTd+//XHhXr451M9r13z9SR3s/VZQMIUCCCAAAJRLEBAj+LmsjUEDAEr/+Px7t+vVd/cmR7Yuv0v6rE7JweNbGV9QRfDBAggYDsBM39GrN+wSbsaJ6glvm+X+2gf0L1PeE/Pzlf2edPVw1WnUYkb1T8thYBuuzOCghBAAIHoFiCgR3d/2R0ClgX0ouISfey4Rq64b56IHO9u1jDnK5p69aSglM38x3dQCzEYAQQiUsDfPyNcLpcWLN6g1NxpPvfZ0RV04/3oH254UuPnPqvUwTmq3l2ofxwo1nXXXcdT3H2KcgACCCCAgFUCBHSrJJkHAZsK+Psft12VX1tbq8f+dEBJQy5pc1hD1WbdfcPZSk5ODnj3VtQX8OIMRAAB2wv4+2fEH/5UrKp+M+WWw+eeOvuIuxHSNxfe1jp+6vX/pt8vfLjL+fytz2dRHIAAAggggIAkAjqnAQJRLmDFfzw+tWKVTqQb93TGtdNyK+1IoX4y1/cVq86YragvylvI9hCIaQF//ow4fPiwntlQL8fAUZZaOY/v0o8v66OMjIxO5/WnPkuLYjIEEEAAgagWIKBHdXvZHALB34NeXl6u/7+9+4+NsyDjAP5s3WA4BlNGmLPRElaQbYCOIJssSlyYGbAQfgyC4cdIcP4jEswckGDESAJMgoH4j9OEEowExiBkIAMyg2a4EWKjso0fg9CYOllAHT8mhdHOXJciq9fdXbten7v30/9I7+593s/3yZt+eXd3D/5pSuyd0l6Wc9y72+PiU9+N9vbyv6+UgT9uKwn5PYFiC1RzjVj18/vjw2OXjwrUIa+vjpXf3ffZG+V+qplvVAbzogQIECDQlAIKelPG6qQI/E9gpH88/viuh6Jl5lUx8CFKL23s6H/xLy5YFvMuvCUmHHJY9L56T/zo2uHdRR/pfLImQKC5BSpdIzo7O+PJrvboPXTou9wjEWr5YEd8s217zJ1b/u58pflGcmzPJUCAAIHiCSjoxcvcGRdMYCR/PP7+D8/GH3edER/0TojNa2/qlxso5aX3ar7x6ub+/z605aP46tRn4+tfO6Nm3ZHMV/PBPIEAgYYTqHSNuPGOtTH5xAN/rdpIT3r3ix1x64oLy75MpflGemzPJ0CAAIFiCSjoxcrb2RZQYCR/PP7gjt/GkSdeErt2bo9Na26M+Utv7f9049LPwB31mV+5OKYfd3q8/eID8dMVZ9csPJL5aj6YJxAg0HACB7pGrHv8qdiy95zoHTdpVM+rZW9PzBn3eCw5Z9H/Hcc1bFTpvTgBAgQKJ6CgFy5yJ1w0geH+8Xj/mnXx+qeWRl9MjDdeey7+/MQdceayX8Skwz/zMWHpk5CnTPtC//cGj489cex/1sSlS5fURDzc+Wo6iAcTINCwAkNdI3p6euLm1c/F4cedW5dze++1x+Lm5afHpEn7/88A17C68DsIAQIECiOgoBcmaidaVIHh/PH41ltvxd2P7oxDps/rZzvQHfTJUz8bX168ov9xH76xOb533jExbdq0qrmHM1/VL+6BBAg0vMBQ14jVHWvizaOXxd4YX5dzHBd9cfSbHbF82dL9jucaVhd+ByFAgEBhBBT0wkTtRIsqMJw/Hn+2em3s/tz/3tM58M/ZS4YD70Ev3VV/7M6z49Rzb/y4oJd+P/nvHXHd8vLv1SyXwXDmK2qWzptAEQXKXSO6urri1xv7Ij59Sn1J/v2XuGzB+Ghra/v4uK5h9Y3A0QgQINDsAgp6syfs/AovUOsfj1u3bo1HX2yNvsNa97Mb/CnupWI+8DNwB7303+Pf747zTuyO2bNnV2Vf63xVvagHESDQNALlrhG33PVAxMyrx+YcX/1V3HTtJQr62Og7KgECBJpeQEFv+oidYNEFai3AP7xzbRx6QuVPRB4o7NNnzut/D/onfz54uSN+8v3q7qLXOl/R83T+BIomMPgasWnT5nhm59zonXjUmFC07PlnnHlMZ8yfv+8tQK5hYxKDgxIgQKBpBRT0po3WiRHYJ1DLH49PPf276OxZGB+NP3w/vp73/hXPdHwnvrR4Rf8ntpd+yr0vfeBJE/rei7mTNsSis75RMYZa5qv4Yh5AgEDTCQy+Rqxc9XAcMfvKMT3Pd7beG6tWXlDzNXZMh3ZwAgQIEGgIAQW9IWIyJIHhC1RbgPv6+mLlz56OqV+8qOzBSp/YvnvXP/rfg95f/NfeFJ/8gLjBT9r10kOx6rqzYvz4A3+AU7XzDV/AMwkQaGSBT14jHnpkXWyfeMGof61aJa/S166173k4Ljp/SU3/E7TS6/o9AQIECBBQ0O0AgSYXqLYA3/ubR6P7yEtjb7SUFSn3HvRPvvd88JPGRW+0vn1/XPmt8w4oXO18TR6T0yNAYAiBgWvErFmz4vb7/hqHtS1OYfV+1xNx/eUnx7Zt2/rnmTdv3z9590OAAAECBEYioKCPRM9zCTSAQDUFeMeOHfHLp3dHy7S5B/WMet/qjG+fNTlmzJgx5OtWM99BHcqLESDQUAID14jnX/hbvDPjqrp9rVolpNLXrh2x45447aTPK+iVsPyeAAECBKoWUNCrpvJAAo0pUE0BXvXz++PDY5ePygke8vrqWPndSxX0UdH1ogSaX6B0Devu7o6XP1oQe6e0pzrhce9ujxMmbIzW1lZ30FMlYxgCBAg0roCC3rjZmZxAVQKVCnpnZ2c82dUevYcOfZe7qgMN8aCWD3bEN9u2x9y55e/OV5pvJMf2XAIEGl+gdI3oeHBDtC6BQETUAAASmUlEQVS8LeXJdG+4IZZdvFBBT5mOoQgQINB4Agp642VmYgI1CVQqwDfesTYmn1j5a9VqOuigB+9+sSNuXVH+a9cqzTeS43ouAQKNL7B+/fq4u+PJmDr9+JQns2vnK3HNFYti8eIc741PiWQoAgQIEKhaQEGvmsoDCTSmwIEK8LrHn4ote88Z9U9ELn3i8Zxxj8eScxb9H6KC3ph7ZWoC9RTYsmVLPQ9X87HmzJlT83M8gQABAgQIlBNQ0O0FgSYXGKoA9/T0xM2rn4vDjzu3LgLvvfZY3Lz89Jg0adJ+x1PQ68LvIAQIECBAgAABAg0goKA3QEhGJDASgaEK8OqONfHm0cvq9onIpU88PvrNjli+bKmCPpJAPZcAAQIECBAgQKBpBRT0po3WiRHYJ1CuoHd1dcWvN/ZFfPqU+jL9+y9x2YLx0dbW9vFx3UGvbwSORoAAAQIECBAgkFdAQc+bjckIHBSBcgX4lrseiJh59UF5/Zpf5NVfxU3XXqKg1wznCQQIECBAgAABAs0uoKA3e8LOr/ACgwv6pk2b45mdc6N34lFjYtOy559x5jGdMX/+vP7ju4M+JjE4KAECBAgQIECAQEIBBT1hKEYicDAFBhfglasejiNmX3kwD1Hza72z9d5YtfICBb1mOU8gQIAAAQIECBBoZgEFvZnTdW4EBt2hfuiRdbF94gWj/rVqleBLX7vWvufhuOj8Je6gV8LyewIECBAgQIAAgcIIKOiFidqJFlVg4A76rFmz4vb7/hqHtS1OQfF+1xNx/eUnx7Zt2/rnmTdv3z9590OAAAECBAgQIECgqAIKelGTd96FERgo6M+/8Ld4Z8ZVdftatUrApa9dO2LHPXHaSZ9X0Cth+T0BAgQIECBAgEAhBBT0QsTsJIssUCro3d3d8fJHC2LvlPZUFOPe3R4nTNgYra2t7qCnSsYwBAgQIECAAAECYyGgoI+FumMSqKNAqaB3PLghWhfeVsejVn+o7g03xLKLFyro1ZN5JAECBAgQIECAQJMKKOhNGqzTIjAgsH79+ri748mYOv34lCi7dr4S11yxKBYvzvHe+JRIhiJAgAABAgQIECiEgIJeiJidZNEFtmzZkppgzpw5qeczHAECBAgQIECAAIF6CCjo9VB2DAIECBAgQIAAAQIECBAgUEFAQbciBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggYCCniAEIxAgQIAAAQIECBAgQIAAAQXdDhAgQIAAAQIECBAgQIAAgQQCCnqCEIxAgAABAgQIECBAgAABAgQUdDtAgAABAgQIECBAgAABAgQSCCjoCUIwAgECBAgQIECAAAECBAgQUNDtAAECBAgQIECAAAECBAgQSCCgoCcIwQgECBAgQIAAAQIECBAgQEBBtwMECBAgQIAAAQIECBAgQCCBgIKeIAQjECBAgAABAgQIECBAgAABBd0OECBAgAABAgQIECBAgACBBAIKeoIQjECAAAECBAgQIECAAAECBBR0O0CAAAECBAgQIECAAAECBBIIKOgJQjACAQIECBAgQIAAAQIECBBQ0O0AAQIECBAgQIAAAQIECBBIIKCgJwjBCAQIECBAgAABAgQIECBAQEG3AwQIECBAgAABAgQIECBAIIGAgp4gBCMQIECAAAECBAgQIECAAAEF3Q4QIECAAAECBAgQIECAAIEEAgp6ghCMQIAAAQIECBAgQIAAAQIEFHQ7QIAAAQIECBAgQIAAAQIEEggo6AlCMAIBAgQIECBAgAABAgQIEFDQ7QABAgQIECBAgAABAgQIEEggoKAnCMEIBAgQIECAAAECBAgQIEBAQbcDBAgQIECAAAECBAgQIEAggcB/AZspUDv6Ne5pAAAAAElFTkSuQmCC",
    __v: 0,
    rules: [
      {
        shapeId: 5,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        shapeId: 6,
        eventType: "hover",
        ruleType: "oneToOne",
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "yellow"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ]
      },
      {
        eventType: "collision",
        ruleType: "manyToOne",
        selfConditions: [
          {
            propertyName: "fillColour",
            operator: "===",
            comparisonValue: "red"
          }
        ],
        selfLogicalOperators: [],
        conditions: [],
        logicalOperators: [],
        actions: [
          {
            actionPropertyName: "fillColour",
            newValue: "red"
          },
          {
            actionPropertyName: "linewidth",
            newValue: 0.1
          }
        ],
        applyToPartner: true
      }
    ],
    throwArray: [],
    shapes: [
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: -19,
          y: 297
        },
        centreOfRotation: {
          x: -19,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 0
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 1018,
          y: 297
        },
        centreOfRotation: {
          x: 1018,
          y: 297
        },
        vertices: [
          {
            x: -17.5,
            y: -297
          },
          {
            x: 18.5,
            y: -297
          },
          {
            x: 18.5,
            y: 303
          },
          {
            x: -17.5,
            y: 303
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -17.5,
          maxX: 18.5,
          minY: -297,
          maxY: 303,
          centre: {
            x: 0.5,
            y: 3
          },
          vertices: [
            {
              x: -17.5,
              y: -297
            },
            {
              x: 18.5,
              y: -297
            },
            {
              x: 18.5,
              y: 303
            },
            {
              x: -17.5,
              y: 303
            }
          ],
          radius: 300.53951487283666
        },
        referenceVectors: {
          location: {
            x: 0.5,
            y: -297
          },
          sideVector: {
            x: 36,
            y: 0,
            z: 0,
            magnitude: 36
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 1
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: 619
        },
        centreOfRotation: {
          x: 500,
          y: 619
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 2
      },
      {
        type: "fixed",
        fillColour: "transparent",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 500,
          y: -20
        },
        centreOfRotation: {
          x: 500,
          y: -20
        },
        vertices: [
          {
            x: -495,
            y: -17.5
          },
          {
            x: 505,
            y: -17.5
          },
          {
            x: 505,
            y: 18.5
          },
          {
            x: -495,
            y: 18.5
          }
        ],
        physics: {
          density: 1,
          mass: null,
          momentOfInertiaCOM: null,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0,
          momentOfInertia: null
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -495,
          maxX: 505,
          minY: -17.5,
          maxY: 18.5,
          centre: {
            x: 5,
            y: 0.5
          },
          vertices: [
            {
              x: -495,
              y: -17.5
            },
            {
              x: 505,
              y: -17.5
            },
            {
              x: 505,
              y: 18.5
            },
            {
              x: -495,
              y: 18.5
            }
          ],
          radius: 500.3238950919694
        },
        referenceVectors: {
          location: {
            x: 5,
            y: -17.5
          },
          sideVector: {
            x: 1000,
            y: 0,
            z: 0,
            magnitude: 1000
          },
          unitNormal: {
            x: -6.123233995736766e-17,
            y: -1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: false
        },
        tags: [],
        id: 3
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 283.0000000000002,
          y: 128
        },
        centreOfRotation: {
          x: 283.0000000000002,
          y: 128
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 4
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 422.0000000000002,
          y: 271
        },
        centreOfRotation: {
          x: 422.0000000000002,
          y: 271
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 5
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 427.0000000000002,
          y: 96
        },
        centreOfRotation: {
          x: 427.0000000000002,
          y: 96
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 6
      },
      {
        type: "circle",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 584.0000000000002,
          y: 250
        },
        centreOfRotation: {
          x: 584.0000000000002,
          y: 250
        },
        vertices: [
          {
            x: 0.05095155102526994,
            y: 20
          },
          {
            x: 4.2091853673804565,
            y: 19.562952014676114
          },
          {
            x: 8.185684412541272,
            y: 18.270909152852017
          },
          {
            x: 11.806656596874733,
            y: 16.18033988749895
          },
          {
            x: 14.913848060573153,
            y: 13.382612127177165
          },
          {
            x: 17.371459626714042,
            y: 10.000000000000002
          },
          {
            x: 19.07208187692834,
            y: 6.180339887498949
          },
          {
            x: 19.941389458390738,
            y: 2.0905692653530736
          },
          {
            x: 19.941389458390738,
            y: -2.0905692653530665
          },
          {
            x: 19.072081876928344,
            y: -6.180339887498947
          },
          {
            x: 17.371459626714046,
            y: -9.999999999999996
          },
          {
            x: 14.913848060573159,
            y: -13.382612127177158
          },
          {
            x: 11.806656596874735,
            y: -16.180339887498945
          },
          {
            x: 8.185684412541278,
            y: -18.270909152852013
          },
          {
            x: 4.2091853673804644,
            y: -19.56295201467611
          },
          {
            x: 0.050951551025272386,
            y: -20
          },
          {
            x: -4.1072822653299115,
            y: -19.562952014676114
          },
          {
            x: -8.083781310490727,
            y: -18.27090915285202
          },
          {
            x: -11.70475349482419,
            y: -16.18033988749895
          },
          {
            x: -14.811944958522611,
            y: -13.382612127177168
          },
          {
            x: -17.2695565246635,
            y: -10.000000000000009
          },
          {
            x: -18.970178774877798,
            y: -6.180339887498951
          },
          {
            x: -19.839486356340196,
            y: -2.0905692653530847
          },
          {
            x: -19.839486356340196,
            y: 2.09056926535306
          },
          {
            x: -18.9701787748778,
            y: 6.180339887498945
          },
          {
            x: -17.26955652466351,
            y: 9.999999999999986
          },
          {
            x: -14.811944958522622,
            y: 13.382612127177156
          },
          {
            x: -11.704753494824198,
            y: 16.180339887498945
          },
          {
            x: -8.08378131049075,
            y: 18.27090915285201
          },
          {
            x: -4.1072822653299275,
            y: 19.56295201467611
          }
        ],
        physics: {
          density: 1,
          mass: 1246,
          momentOfInertiaCOM: 247113.89727126795,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -19.839486356340196,
          maxX: 19.941389458390738,
          minY: -20,
          maxY: 20,
          centre: {
            x: 0.05095155102527116,
            y: 0
          },
          vertices: [
            {
              x: -19.839486356340196,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: -20
            },
            {
              x: 19.941389458390738,
              y: 20
            },
            {
              x: -19.839486356340196,
              y: 20
            }
          ],
          radius: 28.20690554007584
        },
        referenceVectors: {
          location: {
            x: 2.130068459202863,
            y: 19.781476007338057
          },
          sideVector: {
            x: 4.158233816355186,
            y: -0.4370479853238862,
            z: 0,
            magnitude: 4.181138530706138
          },
          unitNormal: {
            x: 0.1045284632676533,
            y: 0.9945218953682733
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 7
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 235,
          y: 179
        },
        centreOfRotation: {
          x: 235,
          y: 179
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 8
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 270,
          y: 393
        },
        centreOfRotation: {
          x: 270,
          y: 393
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 9
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 653,
          y: 212
        },
        centreOfRotation: {
          x: 613,
          y: 257
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: {
          x: 1,
          y: 1
        },
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: true,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 10
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 701,
          y: 279
        },
        centreOfRotation: {
          x: 701,
          y: 279
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 11
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 711,
          y: 356
        },
        centreOfRotation: {
          x: 711,
          y: 356
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 12
      },
      {
        type: "",
        fillColour: "#6495ED",
        strokeStyle: "black",
        linewidth: 0.7,
        centreOfMass: {
          x: 575,
          y: 380
        },
        centreOfRotation: {
          x: 575,
          y: 380
        },
        vertices: [
          {
            x: -20,
            y: 11.6758492428144
          },
          {
            x: 20,
            y: 11.6758492428144
          },
          {
            x: 0,
            y: -22.965166908563145
          }
        ],
        physics: {
          density: 1,
          mass: 689,
          momentOfInertiaCOM: 91679.1640058056,
          velocity: {
            x: 0,
            y: 0
          },
          acceleration: {
            x: 0,
            y: 0
          },
          angularVelocity: 0,
          angularAcceleration: 0,
          forcesCOM: [
            {
              x: 0,
              y: 0
            }
          ],
          torque: 0
        },
        touchPoint: [],
        display: [],
        boundingRect: {
          minX: -20,
          maxX: 20,
          minY: -22.965166908563145,
          maxY: 11.6758492428144,
          centre: {
            x: 0,
            y: -5.644658832874373
          },
          vertices: [
            {
              x: -20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: -22.965166908563145
            },
            {
              x: 20,
              y: 11.6758492428144
            },
            {
              x: -20,
              y: 11.6758492428144
            }
          ],
          radius: 26.457513110645905
        },
        referenceVectors: {
          location: {
            x: 0,
            y: 11.6758492428144
          },
          sideVector: {
            x: 40,
            y: 0,
            z: 0,
            magnitude: 40
          },
          unitNormal: {
            x: 6.123233995736766e-17,
            y: 1
          }
        },
        colliding: false,
        onShape: false,
        dragging: false,
        onClick: false,
        doubleClick: false,
        selected: false,
        events: {
          subscribed: true
        },
        tags: [],
        id: 13
      }
    ]
  }
];
